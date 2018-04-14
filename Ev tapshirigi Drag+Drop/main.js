

var id ;
function allowDrop(ev)
{
    ev.preventDefoult();
}
function dragStart()
{
    id=ev.target.id;
    alrt(id);
}
function drop(ev)
{
    ev.target.append(document.getElementById(id))
}


