import { computed } from 'vue';
import { useDisplay } from 'vuetify';

export function useStyle() {
  const { name, smAndDown } = useDisplay();

  const appStyle = computed(() => {
    return (
      {
        xs: 'width: 100%',
        sm: 'width: 85%',
        md: 'width: 76%',
        lg: 'width: 55%'
      }[name.value] ?? 'width: 50%'
    );
  });

  const gridStyle = computed(() =>
    smAndDown.value ? {} : { gridTemplateColumns: 'repeat(2, 1fr)' }
  );

  return { appStyle, gridStyle };
}
