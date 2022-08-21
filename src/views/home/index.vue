<template>
  <n-space class="bg-black">
    <NDataTable :columns="columns" :data="data" />
    <h1>{{ $t('welcome') }}==>This is i18n template demo</h1>
    <n-icon size="40">
      <game-controller-outline />
    </n-icon>
  </n-space>

  <!-- <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" /> -->
</template>

<script setup>
import { h, defineComponent } from 'vue'
import { NDataTable, NIcon, NButton, useMessage } from 'naive-ui'
import { CashOutline } from '@vicons/ionicons5'
import { GameControllerOutline, GameController } from '@vicons/ionicons5'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// const createColumns = ({ play }) => {
//   return [
//     {
//       title: "No",
//       key: "no",
//     },
//     {
//       title: "Title",
//       key: "title",
//     },
//     {
//       title: "Length",
//       key: "length",
//     },
//     {
//       title: "Action",
//       key: "actions",
//       render(row) {
//         return h(
//           NButton,
//           {
//             strong: true,
//             tertiary: true,
//             size: "small",
//             onClick: () => play(row),
//           },
//           { default: () => "Play" }
//         );
//       },
//     },
//     {
//       title: "Action2",
//       key: "xxx",
//       render(row) {
//         return h(
//           NButton,
//           {
//             strong: true,
//             tertiary: true,
//             size: "small",
//             onClick: () => play(row),
//           },
//           { default: () => "Play" }
//         );
//       },
//     },
//   ];
// };
const message = useMessage()
const data = [
  { no: 3, title: t('welcome'), length: '4:18' }, //i18n demo  within script
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 13, title: 'Champagne Supernova', length: '7:27' },
]
console.log(data)
function play(row) {
  message.info(`Play ${row.title}`)
}

const columns = [
  {
    title: 'No',
    key: 'no',
  },
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Length',
    key: 'length',
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => play(row),
        },
        { default: () => 'Play' }
      )
    },
  },
]

// const actionColumns = [];
// export default defineComponent({
//   setup() {
//     return {
//       message,
//       data,
//       columns,
//       // columns: createColumns({
//       //   play(row) {
//       //     message.info(`Play ${row.title}`);
//       //   },
//       // }),
//       actionColumns,
//       pagination: false,
//     };
//   },
//   components: { BigTable },
// });
</script>

<!-- 
<template>
  <n-data-table :key="(row) => row.key" :columns="columns" :data="data" :pagination="pagination" />
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>

<script>
import { h, defineComponent, ref, nextTick } from "vue";
import { NInput } from "naive-ui";

const createData = () => [
  {
    key: 0,
    name: "John Brown",
    age: "32",
    address: "New York No. 1 Lake Park",
  },
  {
    key: 1,
    name: "Jim Green",
    age: "42",
    address: "London No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Joe Black",
    age: "32",
    address: "Sidney No. 1 Lake Park",
  },
];

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    }
    function handleChange() {
      props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    return () =>
      h(
        "div",
        {
          onClick: handleOnClick,
        },
        isEdit.value
          ? h(NInput, {
            ref: inputRef,
            value: inputValue.value,
            onUpdateValue: (v) => {
              inputValue.value = v;
            },
            onChange: handleChange,
            onBlur: handleChange,
          })
          : props.value
      );
  },
});

export default defineComponent({
  setup() {
    const data = ref(createData());
    return {
      data,
      columns: [
        {
          title: "Name",
          key: "name",
          width: 150,
          render(row, index) {
            return h(ShowOrEdit, {
              value: row.name,
              onUpdateValue(v) {
                data.value[index].name = v;
              },
            });
          },
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          render(row, index) {
            return h(ShowOrEdit, {
              value: row.age,
              onUpdateValue(v) {
                data.value[index].age = v;
              },
            });
          },
        },
        {
          title: "Address",
          key: "address",
          render(row, index) {
            return h(ShowOrEdit, {
              value: row.address,
              onUpdateValue(v) {
                data.value[index].address = v;
              },
            });
          },
        },
      ],
      pagination: {
        pageSize: 10,
      },
    };
  },
});
</script> -->
