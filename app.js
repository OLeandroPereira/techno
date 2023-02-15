const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    },
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then(r => r.json())
        .then(r => {
          this.produtos = r;
        })
    }
    fetchProdutos(id) {
      fetch(`./api/produtos/{{ id }}/produtos.json`)
        .then(r => r.json())
        .then(r => {
          this.produto = r;
        })
    }
  },
  created() {
    this.fetchProdutos();
  }
})
