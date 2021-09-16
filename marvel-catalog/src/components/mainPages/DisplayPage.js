import React, { useState, useEffect } from "react";
import ChangePage from "../utilities/ChangePage";
import styled from "styled-components";
import Search from "../utilities/Search";
import callApi from "../utilities/CallApi";
import { Link, useLocation } from "react-router-dom";
const PageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
`;

const PicStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

function DisplayPage({
  searchType,
  setOrder,
  order,
  limit,
  setLimit,
  content,
  setContent,
  loading,
  setLoading,
}) {
  const { pathname } = useLocation();
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    type: "",
    search: "",
  });



  useEffect(() => {
    console.log(setLoading + "in display page");
    callApi(pathname, setLoading, setContent,   limit, order, page);
  }, [limit, order, page, pathname, setContent, setLoading]);

  const handleClick = () => {
    console.log("click");
  };

  console.log(content);
  return (
    <h1>Lets see</h1>
    // <PageStyled>
    //   {content.map(name => {
    //     return (
    //       <PicStyled key={name.id}>
    //         <div>
    //           <Link
    //             to={{
    //               pathname: `/${name.id}`,
    //             }}
    //           >
    //             <div>
    //               <img
    //                 src={
    //                   name.thumbnail.path +
    //                   "/portrait_fantastic." +
    //                   name.thumbnail.extension
    //                 }
    //                 alt={`Pic of ${name.name}`}
    //               />
    //             </div>
    //             <div>
    //               {name.fullName ? null : (
    //                 <div>
    //                   {name.name ? (
    //                     <div>
    //                       <h1>{name.name}</h1>
    //                       <h2>{name.description}</h2>
    //                     </div>
    //                   ) : (
    //                     <div>
    //                       <h1>{name.title}</h1>
    //                       <h2>{name.discription}</h2>
    //                     </div>
    //                   )}
    //                 </div>
    //               )}
    //             </div>
    //           </Link>
    //         </div>
    //       </PicStyled>
    //     );
    //   })}
    //   <ChangePage click={handleClick} />
    // </PageStyled>
  );
}

export default DisplayPage;

// function handleClick(event) {
//   const name = event.target.name;
//   if (name === "forward") {
//     setPage(page + 1);
//   } else if (name === "back" && page !== 0) {
//     setPage(page - 1);
//   } else if (page === 0) {
//     console.log("Do nada");
//   }
// }

{
  /* <Search
setParams={setParams}
searchType={pathname}
setOrder={setOrder}
order={order}
setLimit={setLimit}
/> */
}
