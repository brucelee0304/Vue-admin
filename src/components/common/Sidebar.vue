<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened router background-color="#324157"
      text-color="#fff" active-text-color="#20a0ff">
      <template v-for="item in items">
        <el-submenu v-if="item.subItem" :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="(subItem,i) in item.subItem" :key="subItem.index" :index="subItem.index">{{subItem.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            icon: 'el-icon-setting',
            index: '1',
            title: '方案与推进会',
            subItem: [{
                index: "page1",
                title: "相关方案"
              },
              {
                index: "page2",
                title: "工作推进"
              },
            ]
          },
          {
            icon: 'el-icon-edit-outline',
            index: '2',
            title: '健康支持性环境',
            subItem: [{
                index: "page3",
                title: "健康社区"
              },
              {
                index: "page4",
                title: "健康学校"
              }
            ]
          },
          {
            icon: 'el-icon-phone-outline',
            index: '3',
            title: '工作推进',
          },
          {
            icon: 'el-icon-upload',
            index: '4',
            title: '工作培训',
          },
          {
            icon: 'el-icon-document',
            index: '5',
            title: '专项行动',
            subItem: [{
                index: "5-1",
                title: "无烟环境创建"
              },
              {
                index: "5-2",
                title: "快乐十分钟推广"
              }
            ]
          },
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
    color: #fff;
  }

  .sidebar>ul {
    height: 100%;
  }

  .sidebar a {
    color: #fff;
  }

  .el-menu-item-group .el-menu-item-group__title {
    padding: 0 !important;
  }

</style>
