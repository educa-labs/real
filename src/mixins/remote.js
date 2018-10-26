export default {
  data() {
    return {
      response: null,
      fetched: false,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.response = await this.query();

      this.fetched = true;
    },
  },
};
