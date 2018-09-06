// @flow
import type {Node} from 'react';
import React from 'react';
import CreateSelect from 'react-select/lib/Creatable';
import get from 'unmutable/lib/get';
import set from 'unmutable/lib/set';
import map from 'unmutable/lib/map';
import first from 'unmutable/lib/first';
import filter from 'unmutable/lib/filter';
import flatMap from 'unmutable/lib/flatMap';
import doIf from 'unmutable/lib/doIf';
import toArray from 'unmutable/lib/toArray';
import pipeWith from 'unmutable/lib/util/pipeWith';
import pipe from 'unmutable/lib/util/pipe';
import isIndexed from 'unmutable/lib/util/isIndexed';
import unique from 'unmutable/lib/unique';

type Props = {
    clearable?: boolean,
    components?: Object,
    createValue?: Function,
    getId?: Function,
    getLabel?: Function,
    menuPortalTarget?: *,
    multi?: boolean,
    onChange: Function,
    options: *,
    value: *
};

const overriddenStyles = {
    menuPortal: set('zIndex', 9999999),
    input: set('margin', 0)
};

const not = (fn) => (value) => !fn(value);

export default class ReactSelectGoose extends React.Component<Props> {
    onChange = (newValue: *): * => {
        const {getId = get('id')} = this.props;
        const {options} = this.props;
        const {multi} = this.props;
        const {createValue = get('value')} = this.props;

        // turn options into a map for efficient
        // finding based on an id
        const idMap = options.reduce((rr: *, ii: *): * => {
            rr[getId(ii)] = ii;
            return rr;
        }, {});

        // either select the value out of the options map
        // or create a fresh one with the create value function
        const createValueFromId = (selectValue: *): * => {
            if(selectValue.__isNew__ && multi) {
                return pipeWith(
                    selectValue.value.split(','),
                    map(_ => _.trim()),
                    unique(),
                    // ignore empty and already selected
                    filter(vv => vv && !(this.props.value || []).includes(vv)),
                    map(value => createValue({value, label: value}))
                );
            }

            return [idMap[selectValue.value] || createValue(selectValue)];
        };

        return pipeWith(
            newValue,
            doIf(
                () => multi,
                flatMap(createValueFromId),
                pipe(
                    createValueFromId,
                    first()
                )
            ),
            this.props.onChange
        );
    };
    render(): Node {
        const {multi} = this.props;
        const {options} =  this.props;
        const {value} = this.props;
        const {clearable} = this.props;
        const {menuPortalTarget} = this.props;
        const {getId = get('id')} = this.props;
        const {getLabel = get('name')} = this.props;

        const parsedOptions = pipeWith(
            options,
            map(option => ({
                label: getLabel(option),
                value: getId(option)
            })),
            toArray()
        );

        const parsedValue = pipeWith(
            value,
            doIf(not(isIndexed), value => value ? [value] : []),
            map(option => ({
                label: getLabel(option),
                value: getId(option)
            })),
            multi ? toArray() : first()
        );

        return <CreateSelect
            isMulti={multi}
            menuPortalTarget={menuPortalTarget}
            closeMenuOnSelect={!multi}
            isClearable={clearable}
            options={parsedOptions}
            value={parsedValue}
            classNamePrefix="Select"
            onChange={this.onChange}
            styles={overriddenStyles}
        />;
    }
}
