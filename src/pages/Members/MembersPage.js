import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { convertMembersToGridFormat, columns } from '../../utils/members';
import { getMembers } from '../../apis/members';

export const MembersPage = () => {
    const [rows,setRows] = useState([]);

    useEffect(()=>{
      getMembers().then((res)=>{
            setRows(convertMembersToGridFormat(res.data.members));
        })
    },[])

  return (
    <div style={{ height: 400, width: '100%' }}>
        {/* <FitnessCenterIcon /> */}
        GYM Members
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default MembersPage;