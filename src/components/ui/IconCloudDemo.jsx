import { IconCloud } from './IconCloud'

const slugs = [
  'java',
  'spring',
  'javascript',
  'typescript',
  'python',
  'react',
  'nodedotjs',
  'express',
  'amazonaws',
  'docker',
  'kubernetes',
  'terraform',
  'githubactions',
  'redis',
  'postgresql',
  'mysql',
  'mongodb',
  'git',
  'github',
  'visualstudiocode',
  'postman',
  'nginx',
]

export function IconCloudDemo() {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      width: '100%',
      maxWidth: '600px',
      height: '500px',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: '15px',
      background: 'rgba(0, 212, 255, 0.05)',
      border: '1px solid rgba(0, 212, 255, 0.2)',
      padding: '20px',
      margin: '0 auto'
    }}>
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
