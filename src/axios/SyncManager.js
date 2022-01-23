

function SyncManager() {
    function SyncContacts(oldContacts , newContacts ,lastUpdate ){

        function isLater(data1 , data2){
            const d1 = Date.parse(data1);
            const d2 = Date.parse(data2);
            return d1 >d2 ;
        }
        
        for (const [id, oldContact] of Object.entries(oldContacts)) {
            const newContact = newContacts[id] ; 
    
            if((id in newContacts) ){
                if( isLater(oldContact.modified_at ,newContact.modified_at) ){
                    newContacts[id] = oldContact ;
                    // update database with oldContact ;
                }
            }
    
            else{
                if( isLater(oldContact.created_at , lastUpdate)){
                    newContact[id] = oldContact ;
                    //add oldContact to database 
                }
            }
        }
    
        for (const [id, newContact] of Object.entries(newContacts)){
    
            if((id in oldContacts) || 
                (isLater(newContact.created_at , lastUpdate))){
                continue ;
            }
    
            // delete newContact form database  
            delete newContacts[id] ;
        }
        
        return newContacts ;
    }
    
    
    function keepSync(props){
         
            

        const contactList = Object.values(props.contacts.contacts)
        // only run if logged in 
        //get oldContact and lastUpdate from current state 
        //get newContacts  from endpoint 
        const res = SyncContacts(oldContact , newContact , lastUpdate) ; 
        // update current list in state with res and lastTime with current time 
    }
    
    //only if logged in
    setInterval(keepSync, 60000) ; 
    
}

export default SyncManager

