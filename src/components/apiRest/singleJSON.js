import { useSelector } from "react-redux";


export default function SingleJSON() {

  const { id } = useSelector((state) => state.id);

  const user = useSelector(state => state.api.users[id - 1])

  return(
    <>

    </>
  );
}
