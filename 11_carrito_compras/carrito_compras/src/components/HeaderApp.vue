<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark navbar-dark"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-2">Shop Store🛒 </span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item">
        <a href="#" class="text-light nav-link" aria-current="page">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="text-light nav-link">About</a>
      </li>
      <li
        class="nav-item"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <a href="#" class="text-light nav-link rounded-pill active bg-secondary"
          >🛒Carrito</a
        >
      </li>
      <li class="nav-item">
        <a href="#" class="text-light nav-link"></a>
      </li>
    </ul>
  </header>
  <br /><br /><br /><br />
</template>

<style scoped>
header {
  background: #fff;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}
</style>
