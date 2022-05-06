export function cartButton(event,nrItems){
    return (<span onClick={event} className="fa-stack fa-2x has-badge" data-count={nrItems}>
            <i className="fa fa-stack-2x fa-inverse"></i>
            <i className="fa fa-shopping-cart fa-stack-2x black-cart"></i>
        </span>)

}
    