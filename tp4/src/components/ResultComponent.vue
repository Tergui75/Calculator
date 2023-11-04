<script setup>
import { defineComponent, computed } from 'vue'
defineComponent({
    name: 'ResultComponent'
})
const props = defineProps({
    ctrAValue: {
        type: Number,
        required: true,
    },
    ctrBValue: {
        type: Number,
        required: true,
    },
    operator: {
        type: String,
        required: true,
    },
});
const total = computed(() => {
    switch (props.operator) {
        case '+':
            return props.ctrAValue + props.ctrBValue
        case '-':
            return props.ctrAValue - props.ctrBValue
        case '*':
            return props.ctrAValue * props.ctrBValue
        case '/':
            return props.ctrAValue / props.ctrBValue
        default:
            return 0
    }
});
</script>
<template lang="pug">
.column.flex.flex-center
  p.q-ma-md.text-h5.text-purple-9 Result
  p.q-my-md.q-mx-xl.text-h5.text-cyan(data-cy="total") {{ total }}
</template>
