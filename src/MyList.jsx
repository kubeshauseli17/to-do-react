import React, {Component} from 'react'
import ListItem from './ListItem'


class MyList extends Component {
  render() {
    // console.log(this.props, 'props in mylist')
    const itemsArr = this.props.theList.map((item, idx) => {
      return <ListItem key={`LI-${idx}`} task={item} />
    })
    return (
      <>
      <h1>Things to do</h1>
      <ul>
        {itemsArr}
      </ul>
      </>
    )
  }
}

export default MyList;
