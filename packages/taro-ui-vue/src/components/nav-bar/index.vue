<template>
  <view :class="rootCls" :style="customStyle">
    <view
      class="at-nav-bar__left-view"
      :style="linkStyle"
      @tap="handleClickLeftView"
    >
      <view v-if="leftIconType" :class="leftIconClass" :style="leftIconStyle" />
      <view class="at-nav-bar__text">
        {{ leftText }}
      </view>
    </view>
    <view class="at-nav-bar__title">
      <slot>{{ title }}</slot>
    </view>
    <view class="at-nav-bar__right-view">
      <view
        :class="
          classNames({
            'at-nav-bar__container': true,
            'at-nav-bar__container--hide': !rightSecondIconType,
          })
        "
        :style="linkStyle"
        @tap="handleClickNd"
      >
        <view
          v-if="rightSecondIconType"
          :class="rightSecondIconClass"
          :style="rightSecondIconStyle"
        />
      </view>
      <view
        :class="
          classNames({
            'at-nav-bar__container': true,
            'at-nav-bar__container--hide': !rightFirstIconType,
          })
        "
        :style="linkStyle"
        @tap="handleClickSt"
      >
        <view
          v-if="rightFirstIconType"
          :class="rightFirstIconClass"
          :style="rightFirstIconStyle"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import AtNavBar from './index'
export default AtNavBar
</script>
