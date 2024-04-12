import { getPath, getPaths } from '../utils/get-path';
import { getDeclarationsPaths } from './get-declarations-paths';

const FILES_PATHS = getPaths([
  // Input
  'packages/@bds-react/core/src/components/Input/InputLabel/InputLabel.tsx',
  'packages/@bds-react/core/src/components/Input/InputWrapper/InputWrapper.tsx',
  'packages/@bds-react/core/src/components/Input/InputDescription/InputDescription.tsx',
  'packages/@bds-react/core/src/components/Input/InputError/InputError.tsx',

  // Button
  'packages/@bds-react/core/src/components/Button/ButtonGroup/ButtonGroup.tsx',

  // ActionIcon
  'packages/@bds-react/core/src/components/ActionIcon/ActionIconGroup/ActionIconGroup.tsx',

  // Popover
  'packages/@bds-react/core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  'packages/@bds-react/core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Slider
  'packages/@bds-react/core/src/components/Slider/Slider/Slider.tsx',
  'packages/@bds-react/core/src/components/Slider/RangeSlider/RangeSlider.tsx',

  // Switch
  'packages/@bds-react/core/src/components/Switch/SwitchGroup/SwitchGroup.tsx',

  // Checkbox
  'packages/@bds-react/core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Radio
  'packages/@bds-react/core/src/components/Radio/RadioGroup/RadioGroup.tsx',

  // Tabs
  'packages/@bds-react/core/src/components/Tabs/TabsTab/TabsTab.tsx',
  'packages/@bds-react/core/src/components/Tabs/TabsList/TabsList.tsx',
  'packages/@bds-react/core/src/components/Tabs/TabsPanel/TabsPanel.tsx',

  // Accordion
  'packages/@bds-react/core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  'packages/@bds-react/core/src/components/Accordion/AccordionControl/AccordionControl.tsx',

  // Pill
  'packages/@bds-react/core/src/components/Pill/PillGroup/PillGroup.tsx',

  // PillsInput
  'packages/@bds-react/core/src/components/PillsInput/PillsInputField/PillsInputField.tsx',

  // Pagination
  'packages/@bds-react/core/src/components/Pagination/PaginationRoot/PaginationRoot.tsx',
  'packages/@bds-react/core/src/components/Pagination/PaginationItems/PaginationItems.tsx',
  'packages/@bds-react/core/src/components/Pagination/PaginationDots/PaginationDots.tsx',
  'packages/@bds-react/core/src/components/Pagination/PaginationEdges/PaginationEdges.tsx',
  'packages/@bds-react/core/src/components/Pagination/PaginationControl/PaginationControl.tsx',

  // Combobox
  'packages/@bds-react/core/src/components/Combobox/ComboboxOption/ComboboxOption.tsx',
  'packages/@bds-react/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@bds-react/core/src/components/Combobox/ComboboxTarget/ComboboxTarget.tsx',
  'packages/@bds-react/core/src/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.tsx',
  'packages/@bds-react/core/src/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.tsx',
  'packages/@bds-react/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@bds-react/core/src/components/Combobox/ComboboxGroup/ComboboxGroup.tsx',

  // AppShell
  'packages/@bds-react/core/src/components/AppShell/AppShellAside/AppShellAside.tsx',
  'packages/@bds-react/core/src/components/AppShell/AppShellNavbar/AppShellNavbar.tsx',
  'packages/@bds-react/core/src/components/AppShell/AppShellHeader/AppShellHeader.tsx',
  'packages/@bds-react/core/src/components/AppShell/AppShellFooter/AppShellFooter.tsx',
  'packages/@bds-react/core/src/components/AppShell/AppShellSection/AppShellSection.tsx',

  // Grid
  'packages/@bds-react/core/src/components/Grid/GridCol/GridCol.tsx',

  // HoverCard
  'packages/@bds-react/core/src/components/HoverCard/HoverCardTarget/HoverCardTarget.tsx',

  // Menu
  'packages/@bds-react/core/src/components/Menu/MenuItem/MenuItem.tsx',
  'packages/@bds-react/core/src/components/Menu/MenuTarget/MenuTarget.tsx',

  // Progress
  'packages/@bds-react/core/src/components/Progress/ProgressSection/ProgressSection.tsx',
  'packages/@bds-react/core/src/components/Progress/ProgressRoot/ProgressRoot.tsx',

  // Chip
  'packages/@bds-react/core/src/components/Chip/ChipGroup/ChipGroup.tsx',

  // Card
  'packages/@bds-react/core/src/components/Card/CardSection/CardSection.tsx',

  // Stepper
  'packages/@bds-react/core/src/components/Stepper/StepperStep/StepperStep.tsx',

  // Timeline
  'packages/@bds-react/core/src/components/Timeline/TimelineItem/TimelineItem.tsx',

  // List
  'packages/@bds-react/core/src/components/List/ListItem/ListItem.tsx',

  // Spotlight
  'packages/@mantine/spotlight/src/Spotlight.tsx',
  'packages/@mantine/spotlight/src/SpotlightAction.tsx',
  'packages/@mantine/spotlight/src/SpotlightActionsGroup.tsx',
  'packages/@mantine/spotlight/src/SpotlightRoot.tsx',
  'packages/@mantine/spotlight/src/SpotlightSearch.tsx',

  // Carousel
  'packages/@mantine/carousel/src/Carousel.tsx',

  // Dropzone
  'packages/@mantine/dropzone/src/Dropzone.tsx',
  'packages/@mantine/dropzone/src/DropzoneFullScreen.tsx',

  // CodeHighlight
  'packages/@mantine/code-highlight/src/CodeHighlight.tsx',
  'packages/@mantine/code-highlight/src/CodeHighlightTabs.tsx',
  'packages/@mantine/code-highlight/src/InlineCodeHighlight.tsx',

  // Nprogress
  'packages/@mantine/nprogress/src/NavigationProgress.tsx',

  // Modals
  'packages/@mantine/modals/src/ModalsProvider.tsx',

  // Tiptap
  'packages/@mantine/tiptap/src/RichTextEditor.tsx',

  // Notifications
  'packages/@mantine/notifications/src/Notifications.tsx',
]);

export const DOCGEN_PATHS = getDeclarationsPaths([
  { type: 'package', path: getPath('packages/@bds-react/core/src/components') },
  { type: 'package', path: getPath('packages/@mantine/dates/src/components') },
  { type: 'package', path: getPath('packages/@mantine/charts/src') },
  ...FILES_PATHS.map((filePath) => ({ type: 'file' as const, path: filePath })),
]);
