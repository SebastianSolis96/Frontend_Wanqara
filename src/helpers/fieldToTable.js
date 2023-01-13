export const columns = ( textFilter, dispatch, startUpdateProduct ) => {
    return [
        {
            dataField: 'id',
            text: 'id',
            sort: true,
            filter: textFilter(),
            editable: false,
            align: 'center',
        },
        {
            dataField: 'name',
            text: 'Name',
            sort: true,
            filter: textFilter(),
            editable: false,
        },
        {
            dataField: 'price',
            text: 'Price',
            sort: true,
            align: 'center',
            validator: ( newValue, row, column ) => {
                if( isNaN( newValue ) ){
                    return {
                        valid: false,
                        message: 'Please enter only numeric data'
                    }
                }
                if( newValue.length === 0 ){
                    return {
                        valid: false,
                        message: 'Please write a number'
                    }   
                }
    
                /* Save changes */
                newValue !== row.price
                    && dispatch( startUpdateProduct( row.id, newValue ) );
    
                return true;
            }
        },
        {
            dataField: 'size',
            text: 'Size',
            sort: true,
            align: 'center',
            editable: false,
        },
    ]
} 

export const columnsWithPromotion = ( textFilter, dispatch, startUpdateProduct, id ) => {
    return [
        {
            dataField: 'id',
            text: 'id',
            sort: true,
            filter: textFilter(),
            align: 'center',
            editable: false,
        },
        {
            dataField: 'name',
            text: 'Name',
            sort: true,
            filter: textFilter(),
            editable: false,
        },
        {
            dataField: 'price',
            text: 'Price',
            sort: true,
            align: 'center',
            validator: ( newValue, row, column ) => {
                if( isNaN( newValue ) ){
                    return {
                        valid: false,
                        message: 'Please enter only numeric data'
                    }
                }
                if( newValue.length === 0 ){
                    return {
                        valid: false,
                        message: 'Please write a number'
                    }   
                }
    
                /* Save changes */
                newValue !== row.price
                    && dispatch( startUpdateProduct( row.id, newValue ) );
    
                return true;
            }
        },
        {
            dataField: 'size',
            text: 'Size',
            sort: true,
            align: 'center',
            editable: false,
        },
        {
            dataField: 'promotion',
            text: 'Promotion',
            sort: false,
            editable: false,
            align: 'center',
            formatter: (cell, row, rowIndex) => {
                if( row.id === id ){
                    return (
                        <input type="checkbox" checked={cell} readOnly ></input>
                    );
                }
            },
        },
    ]
}

export const options = ( data ) => {
    return {
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: '25', value: 25
        }, {
            text: 'All', value: data.length
        }],
    }
}

export const selectRow = ( setId ) => {
    return {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            isSelect && setId( row.id );
        }
    }
}