const multipleUseQuery = ({ supabase, queryKey, table }) => {
  return {
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await supabase.from(table).select()
      if (data) {
        return data
      }
    },
  }
}

export default multipleUseQuery
