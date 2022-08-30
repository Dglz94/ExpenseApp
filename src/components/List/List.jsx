import ListItem from "./ListItem";

const List = ({data}) => {
  return (
    <div className="list-group w-auto">
      {data.map((element, index) => {
        return <ListItem key={index} data={element} />;
      })}
    </div>
  );
};

export default List;
