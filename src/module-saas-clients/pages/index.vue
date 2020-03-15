<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 数据 -->
        <h2>SaaS企业管理</h2>
        <!-- <div v-for="(item, index) in dataList" :key="index">{{item.id}} + {{item.name}}</div> -->
        <!-- elementui的table组件 -->
        <el-table :data="dataList" border style="width: 100%">
          <!-- el-table-column：构造表格中每一列
                prop：数组中每个元素对象的属性名
          -->
          <el-table-column fixed type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="企业名称" width="120"></el-table-column>
          <el-table-column prop="version" label="版本" width="120"></el-table-column>
          <el-table-column prop="companyPhone" label="联系电话" width="120"></el-table-column>
          <el-table-column prop="expirationDate" label="截至时间" width="120"></el-table-column>
          <el-table-column prop="state" label="状态" width="120">
            <!-- scope:传递当前行的所有数据 -->
            <template slot-scope="scope">
              <!-- 开关组件：el-switch
                    active-value：激活的数据值
                    inactive-value：未激活的数据值
                    active-color：激活的颜色
                    inactive-color：未激活的颜色
               -->
              <el-switch v-model="scope.row.state"
               active-color="#13ce66" 
               inactive-color="#ff4949"
               active-value="1" 
               inactive-value="0" 
               disabled
               ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <router-link :to="'/saas-clients/detail/'+scope.row.id">查看</router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- end -->
      </el-card>
    </div>
  </div>
</template>

<script>
import { list } from "@/api/base/saasClient";

export default {
  name: "saas-clients-table-index",
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    getList() {
      //调用API发起请求
      list().then(res => {
        //res响应数据
        this.dataList = res.data.data;
        // console.log(res.data);
      });
    }
  },

  created() {
    this.getList();
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
