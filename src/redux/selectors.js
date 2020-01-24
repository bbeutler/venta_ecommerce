export function useProducts(){
    const products = useSelector(state =>{ return state.data[0].products});

    return [products]
}