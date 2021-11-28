export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'clientOwner',
      title: 'Client Owner',
      type: 'reference',
      to: [{type: 'client'}]
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'services',
      title: 'Services Included',
      type: 'string',
      options: {
        list: [
          {title: 'Visual Design', value: 'visual-design'},
          {title: 'Information Design', value: 'info-design'},
          {title: 'Full System Design', value: 'full-design'},
        ]
      }
    },
    {
      name: 'writeup',
      title: 'Project Write-Up',
      type: 'blockContent',
    },
  ],
}