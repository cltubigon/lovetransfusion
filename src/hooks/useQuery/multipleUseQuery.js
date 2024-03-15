const multipleUseQuery = ({ supabase, queryKey, table, select }) => {
  return {
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await supabase.from(table).select(select)
      if (data) {
        return data
      }
    },
  }
}

export default multipleUseQuery
