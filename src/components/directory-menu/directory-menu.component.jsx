import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux' ;
import { selectDirectorySections } from '../../redux/directory/directory.selectors' ;
import { createStructuredSelector } from 'reselect';
import './directory-menu.styles.scss';



const DirectoryMenu = ({sections}) => (
   <div className='directory-menu'>
       {
         sections.map(({id , ...otherSectionsprops}) => (
              <MenuItem key={id} {...otherSectionsprops} /> 
         ))
      }
      </div>
);

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
}) ;      
    
export default connect(mapStateToProps)(DirectoryMenu) ; 