<template>
  <footer ref="footer" class="vp-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p
        v-if="theme.footer.message"
        class="message"
        v-html="theme.footer.message"
      />
      <p
        v-if="theme.footer.copyright"
        class="copyright"
        v-html="theme.footer.copyright"
      />
      <p class="extra">
        <a
          href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
          target="_blank"
        >
          <span>本网站由</span>
          <img src="./images/upyun-1f2e98af.png" alt="" />
          <span>提供云存储服务</span>
        </a>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          style="margin-left: 10px"
        >
          豫ICP备2021001150号-1
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useData, useSidebar } from "vuepress-theme-plume/composables";
const { theme } = useData();
const { hasSidebar } = useSidebar();
const footer = ref<HTMLElement | null>(null);
onMounted(() => {
  if (footer.value)
    document.body.style.setProperty(
      "--vp-footer-height",
      `${footer.value.offsetHeight}px`
    );
});
</script>

<style scoped>
.vp-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  padding: 24px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-gutter);
  transition: border-top var(--t-color), background-color var(--t-color);
  user-select: none;
}

.footer-no-border .vp-footer {
  background-color: transparent;
  border-top: none;
}

.vp-footer p {
  color: var(--vp-c-text-2);
  transition: color var(--t-color);
}

.vp-footer a {
  text-decoration: none !important;
}

.vp-footer img {
  height: 24px;
  display: inline;
  vertical-align: middle;
  margin: 0 5px;
}

.vp-footer :deep(a) {
  color: var(--vp-c-text-2);
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color var(--t-color), text-underline-offset var(--t-color);
}

.vp-footer :deep(a:hover) {
  color: var(--vp-c-text-1);
  text-underline-offset: 4px;
}

@media (min-width: 960px) {
  .vp-footer.has-sidebar {
    margin-left: var(--vp-sidebar-width);
  }

  .vp-footer.has-sidebar .container {
    margin-left: calc(0px - var(--vp-sidebar-width));
  }
}

@media (min-width: 1440px) {
  .vp-footer {
    padding: 24px;
  }

  .vp-footer.has-sidebar {
    margin-left: calc(
      (100% - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)
    );
  }
}

.container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  text-align: center;
}

.message,
.copyright,
.extra {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.message {
  order: 2;
}

.copyright {
  order: 1;
}
</style>
