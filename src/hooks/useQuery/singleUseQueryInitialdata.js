const singleUseQueryInitialdata = ({
  supabase,
  queryKey,
  table,
  column,
  columnValue,
  initialData,
}) => {
  return {
    queryKey,
    queryFn: async () => {
      const { data } = await supabase
        .from(table)
        .select()
        .ilike(column, columnValue)
      if (data) {
        return data
      }
    },
    initialData,
  }
}

export default singleUseQueryInitialdata
