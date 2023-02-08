import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const SideBar = () => {
  return (
    <div className="sideprofile">
        
    <button className="transparent"><Person2Icon style={{color: "#e3e8f1"}}/></button>
    {/* <button className="transparent"><DisabledByDefaultIcon style={{color: "#e2e8f6"}}/></button> */}
    <button className="transparent"><AccountTreeIcon style={{color: "#e7eef4"}}/></button>

    </div>
  )
}

export default SideBar