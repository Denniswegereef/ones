// import { fetchEntries } from '../../utils/ContentFulData'

// const Serie = ({ data }) => {
//   console.log(data)
//   return (
//     <>
//       <h1>Series</h1>
//     </>
//   );
// }

// export default Serie;

// export async function getStaticProps({ params }) {
//   const res = await fetchEntries({
//     content_type: 'serie',
//   })

//   return { props: { data: res },
//   }
// }

// export async function getStaticPaths() {
//   const res = await fetchEntries({
//     content_type: 'serie'
//   })

//   return {
//     paths: res.map(({fields}) => `/serie/${fields.slug}`),
//     fallback: false,
//   }
// }