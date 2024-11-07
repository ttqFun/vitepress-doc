<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #not-found>
      <div class="NotFound">
        <p class="code">404</p>
        <h1 class="title">PAGE NOT FOUND</h1>
        <div class="action">
          <a
            class="link"
            href="/vitepress-doc/introduction"
            aria-label="go to home"
          >
            Take me home
          </a>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition:
    border-color 0.25s,
    color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>