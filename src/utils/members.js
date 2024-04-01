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
