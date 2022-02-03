import React from 'react';
import {RiFacebookFill,RiMailOpenLine,RiPhoneLine} from 'react-icons/ri';
const Info = () => {
    return(
        <div>
            <address>
                <ul>
                    <li>
                        <a href='' target='_blank' rel='follow'>
                            <RiFacebookFill/>
                        </a>
                    </li>
                    <li>
                        <div>
                            <span>
                                <RiPhoneLine/>
                            </span>
                            <div>
                                <a href='tel:501816146'>
                                    501-816-146
                                </a>
                                <a href='tel:500747899'>
                                    500-747-899
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>
                                <RiMailOpenLine/>
                            </span>
                            <div>
                                <a href='mailto:warzywapleszew@wp.pl'>
                                    warzywapleszew@wp.pl
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </address>
        </div>
    )
}
export default Info;