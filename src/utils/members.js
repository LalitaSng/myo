export const convertMembersToGridFormat = (members) =>{
    if(members === null || undefined){
        return [];
    }
    const formattedMembers = members.map(member => {
        const formattedMember = {
            ...member,
            id:member._id,
        };
        return formattedMember;
    });
    return formattedMembers;
}

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 90},
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  // const rows = [
  //   { id: 1, lastName: 'Singh', firstName: 'Gaurav', age: 29 , Gender: 'Male'},
  //   { id: 2, lastName: 'Maurya', firstName: 'Prathmesh', age: 27 ,Gender: 'Male'},
  //   { id: 3, lastName: 'Pandey', firstName: 'Deepak', age: 28, Gender: 'Male' },
  //   { id: 4, lastName: 'Pandey', firstName: 'Roopak', age: 16, Gender: 'Male' },
  //   { id: 5, lastName: 'Singh', firstName: 'Lalita', age: 28 , Gender: 'Female'},
  //   { id: 6, lastName: 'Yadav', firstName: 'Kashish', age: 20 , Gender: 'Female'},
  // ];
  