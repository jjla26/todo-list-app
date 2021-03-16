(function(){
    // Add Form listener listener
    $('form').on('submit', e => {
        e.preventDefault()
        const list = $('ol')
        const value = $('#input').val() 
        const newElement = $(`<li>${value}</li>`)
        const deleteButton = $('<crossOutButton>X</crossOutButton>')
        newElement.append(deleteButton)
        if(!isListed(newElement.text())){
            if(value){
                list.append(newElement)
    
                // event listener to cross out item on double click
                newElement.on('dblclick', () => crossOut(newElement) )
    
                //event listener to delete items on click
                deleteButton.on('click', () => deleteListItem(newElement) )
            }else{
                alert("You must write something")
            }
        }else{
            alert("This is an existing TODO, try with a different name")
        }
    })

    // Function to check if a todo already exist
    function isListed(value){
        let listed = false
        $('li').each(function(){
            if($(this).text() === value){
                listed = true
                return false
            }
        })
        return listed
    }

    // function to cross out items
    function crossOut(element){
        element.toggleClass('strike')
    }

    // function to delete items
    function deleteListItem(element){
        element.remove()
    }

    // Function to make the list s
    $('ol').sortable()
    
})()