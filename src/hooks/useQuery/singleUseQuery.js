const singleUseQuery = ({ supabase, queryKey, table, column, columnValue }) => {
  return {
    queryKey: queryKey,
    queryFn: async () => {
      const { data } = await supabase
        .from(table)
        .select()
        .ilike(column, columnValue)
      if (data) {
        return data
      }
    },
    refetchInterval: 60 * 1000,
  }
}

export default singleUseQuery
