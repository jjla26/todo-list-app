(function(){
    // Add Form listener listener
    $('form').on('submit', e => {
        e.preventDefault()
        const list = $('ol')
        const value = $('#input').val() 
        const newElement = $(`<li>${value}</li>`)
        const deleteButton = $('<crossOutButton>X</crossOutButton>')
        newElement.append(deleteButton)

        if(value){
            list.append(newElement)

            // event listener to cross out item on double click
            newElement.on('dblclick', () => crossOut(newElement) )

            //event listener to delete items on click
            deleteButton.on('click', () => deleteListItem(newElement) )
        }else{
            alert("You must write something")
        }
    })

    // function to cross out items
    function crossOut(element){
        element.toggleClass('strike')
    }

    // function to delete items
    function deleteListItem(element){
        element.addClass('delete')
    }
    
})()