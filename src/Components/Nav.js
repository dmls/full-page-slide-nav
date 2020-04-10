import React from 'react';

/*
1. Will have method that triggers 'active' so that 
users can create an instance of the element and decide
what triggers it.
2. Will take properties: items
3. Will have separate desktop and mobile menus
*/

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggleActive() {
        this.setState({active: !this.state.active});
    }

    render() {
        return (
            <React.Fragment>
                {/* desktop */}

                {/* mobile */}
                <div className={'fpsNav fpsNav-mobile' + (this.props.active ? ' active' : '')}>
                    {
                        this.props.items.map(function(item, index) {
                            return (
                               <a href={item.href} className="fpsNavItem" key={index}>
                                   <div className="center-vertical">{item.label}</div>
                               </a> 
                            )
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Nav