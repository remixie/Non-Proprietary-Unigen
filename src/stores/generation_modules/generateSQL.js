export default {
  state: {
    sql: `SELECT * from #client_nametable t WHERE field = 'something'#record_id#field_name#print_id#job_id#limit;`
  },
  getters: {
    getSQL: state => state.sql
  },
  mutations: {},
  actions: {
    submitSQLRequest() {}
  }
};
