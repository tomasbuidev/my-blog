// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/site/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. generated by jekyll-scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a curated list of the projects that I&#39;ve worked in.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/projects/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/site/blog/";
              },
            },{id: "post-flow-matching-generative-model",
      
        title: "Flow matching generative model",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/cfm/";
        
      },
    },{id: "post-elucidating-the-design-space-of-diffusion-based-generative-models-a-k-a-edm-model",
      
        title: "Elucidating the design space of diffusion-based generative models (a.k.a EDM model)",
      
      description: "notes on the outstanding EDM paper",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/edm/";
        
      },
    },{id: "post-how-swiftbrush-leverages-vsd-to-train-a-one-step-text-to-image-generative-model",
      
        title: "How SwiftBrush leverages VSD to train a one-step text-to-image generative model",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/swiftbrush/";
        
      },
    },{id: "post-instaflow-one-step-is-enough-for-high-quality-diffusion-based-text-to-image-generation",
      
        title: "InstaFlow: one step is enough for high-quality diffusion-based text-to-image generation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/instaflow/";
        
      },
    },{id: "post-prompt-based-image-editing-via-delta-denoising-score",
      
        title: "Prompt-based image editing via Delta Denoising Score",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/dds/";
        
      },
    },{id: "post-explore-the-score-distillation-sampling-technique",
      
        title: "Explore the Score Distillation Sampling technique",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/sds/";
        
      },
    },{id: "projects-real-time-rigid-deformation-for-web-browsers",
          title: 'Real-time rigid deformation for web browsers',
          description: "an implementation of Image Deformation Using Moving Least Squares for web browser",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/fun_imagewarp/";
            },},{id: "projects-fast-portrait-matting-for-web-browsers",
          title: 'Fast portrait matting for web browsers',
          description: "MODNet inference in a web browser",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/fun_portrait_mat/";
            },},{id: "projects-personalized-avatar-generator",
          title: 'personalized avatar generator',
          description: "utilize a 3DMM parameter prediction model to construct personalized 3D avatars",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/work_avatargen/";
            },},{id: "projects-detect-and-refine-margin-lines-on-a-3d-tooth-model",
          title: 'Detect and refine margin lines on a 3D tooth model',
          description: "a geometry processing project that I researched and developed while being a research student in Computer Graphics",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/work_dental/";
            },},{id: "projects-real-time-hdr-lighting-environment-map-estimation",
          title: 'Real-time HDR lighting environment map estimation',
          description: "lightweight deep neural network for real-time estimating a HDR lighting environment map from a single LDR input image",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/work_envmap/";
            },},{id: "projects-face-restoration-model",
          title: 'Face restoration model',
          description: "deep neural network for fast restoration of corrupted facial images",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/work_facerestore/";
            },},{id: "projects-test-time-training-free-personalized-text-to-image-diffusion-model",
          title: 'Test-time training-free personalized text-to-image diffusion model',
          description: "a personalized diffusion model that does not require training/finetuning during test-time",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/work_pt2i/";
            },},{id: "projects-improving-the-personalized-text-to-image-diffusion-model",
          title: 'Improving the personalized text-to-image diffusion model',
          description: "rebuild the personalized text-to-image diffusion model using more powerful architectures and upgraded dataset",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/work_pt2i_ver2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/site/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
