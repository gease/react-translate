import React from "react";

const useState = React.useState;

const Accordion =  ({items}) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const titleClicked = (index) => {setActiveIndex(index)}

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? ' active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title${active}`} onClick = {() => titleClicked(index)}>
          <i className="dropdown icon"></i>{item.title}
        </div>
        <div className={`content${active}`}>{item.content}</div>
      </React.Fragment>
  );
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
}

export default Accordion;