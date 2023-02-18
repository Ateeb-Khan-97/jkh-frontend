'use client';
// imports
import React from 'react';
import DataTable, { TableProps } from 'react-data-table-component';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextInput } from '@mantine/core';
//
// custom-styles
const customStyles = {
  table: {
    style: {
      width: '100%',
    },
  },
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: 'lightGray',
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'lightGray',
      },
    },
  },
  row: {
    style: {
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderRightColor: 'red',
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'lightGray',
      },
      '>input': {
        width: '100%',
        padding: '2px',
        fontSize: '12px',
      },
      '>div': {
        display: 'flex',
      },
    },
  },
};
// types
type FilterProps = {
  filterText: string;
  onFilter: (value: any) => void;
};
//
//
function FilterComponent({ filterText, onFilter }: FilterProps) {
  return (
    <TextInput
      icon={<AiOutlineSearch />}
      type="text"
      placeholder={`Search`}
      value={filterText}
      onChange={onFilter}
    />
  );
}
//
export default function DataTableComponent(props: TableProps<any>) {
  // use-states
  const [filterText, setFilterText] = React.useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState<boolean>(false);
  const [filteredItems, setFilteredItems] = React.useState<any[]>([]);
  //
  // use-effect
  React.useEffect(() => {
    setFilteredItems(
      props.data
        .filter((item: any) => {
          var filterFlag = false;
          Object.keys(item).every((each_key) => {
            if (
              item[each_key] &&
              item[each_key]
                ?.toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
            ) {
              filterFlag = true;
              return false;
            }
            return true;
          });
          return filterFlag;
        })
        .reverse(),
    );
  }, [props.data, filterText]);
  //
  // use-memo
  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e: any) => {
          setFilterText(e.target.value);
        }}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  //
  return (
    <DataTable {...props} data={filteredItems} customStyles={customStyles} />
  );
}
//
