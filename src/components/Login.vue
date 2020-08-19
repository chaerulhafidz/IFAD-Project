<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-6">
      <div class="card-body p-0">
        <div class="p-12">
          <div class="text-center">
            <h1 class="h2 mt-4">Login Pengguna IFAD</h1>
          </div>
        </div>
        <!-- Nested Row within Card Body -->
        <form class="user" @submit="loginSubmit">
          <!-- <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> -->
          <div class="ml-5 mr-5 mb-4 mt-4">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-user"
                v-model="username"
                id="username"
                placeholder="Username"
                style="text-align:center"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-user"
                v-model="password"
                id="password"
                placeholder="Password"
                style="text-align:center"
              />
            </div>
          </div>

          <div class="ml-5 mr-5 mb-4">
            <button class="btn btn-primary btn-user btn-block">Masuk</button>
            <hr />
            <div class="text-center">
              <router-link class="small" to="/registrasi">Belum punya akun? Daftar sekarang!</router-link>
            </div>
          </div>
          <!-- end of form -->
        </form>
      </div>
    </div>
    <!-- Output testing, show response form API -->
    <strong>Output:</strong>
    <pre> {{ output }} </pre>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      username: "",
      password: "",
      output: ""
    };
  },
  methods: {
    loginSubmit(e) {
        console.log(this);
      e.preventDefault();
      let obj = this;
      this.axios
        .post("http://117.53.47.76/kms_backend/public/api/test", {
          username: this.username,
          password: this.password
        })
        .then(function(response) {
          obj.output = response.data;
        })
        .catch(function(error) {
          obj.output = error;
        });
    }
  }
};
</script>