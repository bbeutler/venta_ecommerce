const Pagination =({page, length, changePage})=>{

    return <div className="flex justify-center items-center mt-6 lg:mt-10">
   {
    length.length > 1 ? <> {page.pageView >= (length.length / 100) * 65 && (
      <>
        <p
                   className={`${page.posts[0] === 0 ? "shadow-md shadow-orange-900 text-orange-900" : "bg-orange-900 text-orange-100"} ml-2 text-sm p-1 cursor-pointer w-6 h-6  duration-500`}
  
          onClick={() => changePage(1)}
        >
          {1}
        </p>
        <p className="mx-0 text-sm p-1 w-6 h-6">.....</p>
      </>
    )}
  
    {length.length > 0 &&
      length.slice(page.pageView - 2, page.pageView + 1).map((prod) => {
       if(prod !== 1) {
        return (
          <p
            className={`${prod === page.pageView && page.posts[0] !== 0  ? "shadow-md shadow-orange-900 text-orange-900" : "bg-orange-900 text-orange-100"} ml-2 text-sm p-1 cursor-pointer w-6 h-6  duration-500`}
            key={prod}
            onClick={() => changePage(prod)}
          >
            {prod}
          </p>
        );
      } else if(prod === 1) return <p
      className={`${page.posts[0] === 0 ? "shadow-md shadow-orange-900 text-orange-900" : "bg-orange-900 text-orange-100"} ml-2 text-sm p-1 cursor-pointer w-6 h-6  duration-500`}
      key={prod}
      onClick={() => changePage(prod)}
    >
      {prod}
    </p>
      })}
  
    {page.pageView <= (length.length / 100) * 65 && (
      <>
        <p className="mx-0 text-sm p-1 w-6 h-6">.....</p>
        <p
          className="bg-orange-900 text-orange-100  text-sm p-1 cursor-pointer w-6 h-6"
          onClick={() => changePage(9)}
        >
          {length.at(-1)}
        </p>
      </>
    )}</> :  <p
    className={` bg-orange-900 text-orange-100 ml-2 text-sm p-1 cursor-pointer w-6 h-6  duration-500`}
>
{1}
</p>
   }
  
    </div>
  }

  export default Pagination