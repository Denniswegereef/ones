import { fetchEntries } from '../../utils/contentful'

const Serie = ({ data }) => {
  return (
    <>
      {data.title} - {data.year}
    </>
  );
}

export default Serie;

export async function getStaticProps({ params }) {
  const res = await fetchEntries({
    content_type: 'series',
    'fields.slug[in]': params.index,
    limit: 1,
  })

  return { props: { data: res[0].fields },
  }
}

export async function getStaticPaths() {
  const res = await fetchEntries({
    content_type: 'series'
  })

  return {
    paths: res.map(({fields}) => `/serie/${fields.slug}`),
    fallback: false,
  }
}