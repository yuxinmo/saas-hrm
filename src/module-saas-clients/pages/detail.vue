<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 数据 -->
        <h2>SaaS企业详情</h2>
        <!-- <div v-for="(item, index) in dataList" :key="index">{{item.id}} + {{item.name}}</div> -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="企业信息" name="first">
            <!-- el-form：表单
                  model：双向绑定的数据对象
             -->
            <el-form ref="form" :model="formData" label-width="200px">
              <el-form-item label="企业名称" >
                <el-input v-model="formData.name" style="width:250px" disabled></el-input>
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input v-model="formData.companyAddress" style="width:250px" disabled></el-input>
              </el-form-item>
              <el-form-item label="公司电话">
                <el-input v-model="formData.companyPhone" style="width:250px" disabled></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formData.mailbox" style="width:250px" disabled></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="formData.remark" style="width:250px"></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary">审核</el-button>
                <el-button>拒绝</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="账户信息" name="second">账户信息</el-tab-pane>
          <el-tab-pane label="交易记录" name="third">交易记录</el-tab-pane>
        </el-tabs>
        <!-- end -->
      </el-card>
    </div>
  </div>
</template>

<script>
import { detail } from "@/api/base/saasClient";

export default {
  name: "saas-clients-detail",
  data() {
    return {
      formData: {},
      activeName: "first"
    };
  },
  methods: {
    detail(id) {
      //调用API发起请求
      detail({
        id
      }).then(res => {
        //res响应数据
        this.formData = res.data.data;
        console.log(this.formData);
        console.log(id);
      });
    }
  },

  created() {
    var id = this.$route.params.id;
    this.detail(id);
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
