
interface IHomeProps {
  pools: {
    count: number
  };
}
export default function Home(props: IHomeProps) {


  return (
  <div>
    <h1>eSports Bet</h1>
    <h2>Count: {props.pools.count}</h2>
  </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/pools/count')
  const data = await response.json();

  return {
    props: {
      pools: {
        count: data?.count || 0,
      }
    }
  }
}