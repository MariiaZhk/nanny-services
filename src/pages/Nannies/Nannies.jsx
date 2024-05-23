import NanniesList from "../../components/NanniesList/NanniesList";
// import {
//   getDatabase,
//   onValue,
//   orderByChild,
//   query,
//   ref,
//   limitToFirst,
// } from "firebase/database";
// import app from "../../firebaseConfig";
import {
  // LoadMoreBtn,
  // LoadMoreWrapper,
  NanniesContainer,
  NanniesSection,
} from "./Nannies.styled";
import Container from "../../components/Container/Container";

const Nannies = () => {
  // const [nannies, setNannies] = useState([]);
  // const [page, setPage] = useState(1);
  // const itemsPerPage = 3;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = getDatabase(app);
  //     const nanniesRef = ref(db, "nannies");
  //     const nanniesQuery = query(
  //       nanniesRef,
  //       orderByChild("rating"),
  //       limitToFirst(itemsPerPage * page)
  //     );

  //     onValue(nanniesQuery, (snapshot) => {
  //       const nanniesData = snapshot.val();
  //       const nanniesArray = nanniesData ? Object.values(nanniesData) : [];
  //       setNannies(nanniesArray);
  //     });
  //   };

  //   fetchData();
  // }, [page]);

  // const onLoadMoreClick = () => {
  //   setPage(page + 1);
  // };

  return (
    <Container>
      <NanniesSection>
        <NanniesContainer>
          <NanniesList />
        </NanniesContainer>
        {/* <LoadMoreWrapper>
          <LoadMoreBtn type="button" onClick={onLoadMoreClick}>
            Load more
          </LoadMoreBtn> */}
        {/* </LoadMoreWrapper> */}
      </NanniesSection>
    </Container>
  );
};

export default Nannies;
