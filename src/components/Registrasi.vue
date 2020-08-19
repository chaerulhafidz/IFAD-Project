<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-6">
      <div class="card-body p-0">
        <div class="p-12">
          <div class="text-center">
            <h1 class="h2 mt-4">Registrasi Akun Baru</h1>
          </div>
        </div>
        <!-- Nested Row within Card Body -->
        <form class="user" @submit="registerSubmit">
          <div class="row">
            <!-- <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> -->
            <div class="col-lg-4">
              <div class="p-4">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-3">Data Pribadi</h1>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="nama"
                    v-model="username"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="password"
                    v-model="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="p-4">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-3">Keterangan Lokasi</h1>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="nama-desa"
                    v-model="desa"
                    placeholder="Nama Desa"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="kampung"
                    v-model="kampung"
                    placeholder="Kampung/Dusun"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="kecamatan"
                    v-model="kecamatan"
                    placeholder="Kecamatan"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="p-4">
                <!-- <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-3"><br></h1>
                </div>-->
                <h2 class="h5">
                  <b>Nama Provinsi - Kota/ Kab</b>
                </h2>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="prov"
                    v-model="provinsi"
                    v-bind:value="1"
                    checked
                  />
                  <label class="form-check-label" for="prov1">
                    <b>Provinsi Jawa Barat</b>
                    <br />
                    <small>Cianjur / Sukabumi / Tasikmalaya / Subang</small>
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="prov"
                    v-model="provinsi"
                    v-bind:value="2"
                  />
                  <label class="form-check-label" for="prov2">
                    <b>Provinsi Jawa Timur</b>
                    <br />
                    <small>Malang / Tulung Agung / Pasuruan / Pacitan</small>
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="prov"
                    v-model="provinsi"
                    v-bind:value="3"
                  />
                  <label class="form-check-label" for="prov3">
                    <b>Provinsi Kalimantan Selatan</b>
                    <br />
                    <small>Tanah Laut / Banjar / Tanah Bumbu</small>
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="prov"
                    v-model="provinsi"
                    v-bind:value="4"
                  />
                  <label class="form-check-label" for="prov4">
                    <b>Provinsi Sulawesi Selatan</b>
                    <br />
                    <small>Bantaeng / Maros / Bulukumba / Bone</small>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-5 mr-5 mb-4">
            <button class="btn btn-primary btn-user btn-block">Buat Akun</button>
            <hr />
            <div class="text-center">
              <router-link class="small" to="/login">Sudah punya akun? Login!</router-link>
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
      desa: "",
      kampung: "",
      kecamatan: "",
      provinsi: "",
      output: ""
    };
  },
  methods: {
    registerSubmit(e) {
      console.log(this);
      e.preventDefault();
      let obj = this;
      this.axios
        .post("http://117.53.47.76/kms_backend/public/api/test", {
          username: this.username,
          password: this.password,
          desa: this.desa,
          kampung: this.kampung,
          kecamatan: this.kecamatan,
          provinsi: this.provinsi
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