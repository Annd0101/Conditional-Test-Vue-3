<template>
    <div class="loading">
        <i class="fas fa-circle-notch"></i>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
    width: 100%;
    height: fit-content;
    text-align: center;
    padding: 20px 0;
    i {
        font-size: 40px;
        animation: spin 1s linear infinite;
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
}
</style>