<template>
    <div>
      <div style="text-align: center;margin-top: 1rem;">
        <img src="img/pig.png" style="width: 1.4rem;border-radius: 0.1rem;" />
        <p class="userName">彩虹小猪</p>
      </div>

      <div class="mui-content" style="margin-top: 1rem;">

        <ul class="mui-table-view-list">

          <li class="mui-table-view-cell" style="line-height: 0.4rem;">
            <span class="left_title">公众号消息推送</span>
            <div class="mui-switch mui-switch-mini mui-active ">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
          <li class="mui-table-view-cell"  style="line-height: 0.4rem;">
            <span class="left_title">收益信息推送</span>
            <div class="mui-switch mui-switch-blue mui-switch-mini ">
              <div class="mui-switch-handle"></div>
            </div>
          </li>

          <li class="mui-table-view-cell"  style="line-height: 0.4rem;">
            <div style="display: flex;justify-content: space-between;">
              <div class="left_title">清除缓存</div>
              <div>
                <button class="deleteSave">清除</button>
              </div>
            </div>

          </li>
          <li class="mui-table-view-cell"  style="line-height: 0.4rem;">
            <div style="display: flex;justify-content: space-between;">
              <div class="left_title">公众号消息推送</div>
              <div class="versions">V 1.5.0</div>
            </div>
          </li>
          <li class="mui-table-view-cell">

          </li>
        </ul>
      </div>
      <div style="text-align: center;margin-top:1.5rem;">
        <button class="Outlogin">退出登录</button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "peopleSet"
    }
</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/peopleSet.css';


</style>
