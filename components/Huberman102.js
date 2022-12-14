import React from 'react'
import ReactPlayer from 'react-player'

export default function Huberman102() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const playerRef = React.useRef()

  const jumptoTime = (time, id) => {
    playerRef.current.seekTo(time, 'seconds')
    setIsPlaying(true)
  }

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=O640yAgq5f8"
        playing={isPlaying}
        height="310px"
        width="540px"
        controls={true}
      />

      <br />

      <div>
        <title>Huberman Lab Podcast 102</title>
        <div style={{ fontStyle: 'italic' }}>
          (Click on a part of the transcription to jump to that part in the YouTube video.)
        </div>
        <br />
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:00:00.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(0, '00:00:00.269')}
          >
            Welcome to the Huberman Lab Podcast,{' '}
          </a>
          <a
            id="00:00:02.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2, '00:00:02.269')}
          >
            where we discuss science{' '}
          </a>
          <a
            id="00:00:03.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3, '00:00:03.669')}
          >
            and science-based tools for everyday life.{' '}
          </a>
          <br />
          <br />

          <a
            id="00:00:09.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(9, '00:00:09.149')}
          >
            I'm Andrew Huberman,{' '}
          </a>
          <a
            id="00:00:10.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(10, '00:00:10.189')}
          >
            and I'm a professor of neurobiology and ophthalmology{' '}
          </a>
          <a
            id="00:00:13.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(13, '00:00:13.149')}
          >
            at Stanford School of Medicine.{' '}
          </a>
          <a
            id="00:00:14.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(14, '00:00:14.989')}
          >
            Today, my guest is Dr. Kyle Gillette.{' '}
          </a>
          <br />
          <br />

          <a
            id="00:00:17.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(17, '00:00:17.389')}
          >
            Dr. Kyle Gillette is a dual board certified physician{' '}
          </a>
          <a
            id="00:00:20.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(20, '00:00:20.069')}
          >
            in family medicine and obesity medicine{' '}
          </a>
          <a
            id="00:00:22.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(22, '00:00:22.509')}
          >
            and an expert in hormone optimization.{' '}
          </a>
          <a
            id="00:00:25.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(25, '00:00:25.189')}
          >
            He is an MD, that is a medical doctor,{' '}
          </a>
          <a
            id="00:00:28.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(28, '00:00:28.149')}
          >
            and he treats patients with a variety of backgrounds,{' '}
          </a>
          <a
            id="00:00:31.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(31, '00:00:31.029')}
          >
            ages, and goals.{' '}
          </a>
          <br />
          <br />

          <a
            id="00:00:32.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(32, '00:00:32.669')}
          >
            Today, we discuss male hormone optimization.{' '}
          </a>
          <a
            id="00:00:35.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(35, '00:00:35.629')}
          >
            We discuss behavioral tools, nutrition-based tools,{' '}
          </a>
          <a
            id="00:00:39.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(39, '00:00:39.229')}
          >
            supplement-based tools, prescription drug-based tools,{' '}
          </a>
          <a
            id="00:00:42.729"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(42, '00:00:42.729')}
          >
            and their interactions in determining overall levels{' '}
          </a>
          <a
            id="00:00:46.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(46, '00:00:46.229')}
          >
            of testosterone, free testosterone, dihydrotestosterone,{' '}
          </a>
          <a
            id="00:00:50.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(50, '00:00:50.629')}
          >
            estrogen growth hormone, thyroid hormone,{' '}
          </a>
          <a
            id="00:00:52.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(52, '00:00:52.669')}
          >
            and many other hormones that impact mood, libido,{' '}
          </a>
          <a
            id="00:00:55.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(55, '00:00:55.989')}
          >
            well-being, strength, cognition,{' '}
          </a>
          <a
            id="00:00:59.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(59, '00:00:59.069')}
          >
            and various psychological factors.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:01:01.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(61, '00:01:01.349')}
          >
            We've covered hormone optimization in both men and women{' '}
          </a>
          <a
            id="00:01:04.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(64, '00:01:04.069')}
          >
            in previous episodes of the Huberman Lab Podcast,{' '}
          </a>
          <a
            id="00:01:06.869"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(66, '00:01:06.869')}
          >
            but today's discussion is different.{' '}
          </a>
          <a
            id="00:01:09.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(69, '00:01:09.229')}
          >
            Dr. Kyle Gillette offers very specific recommendations{' '}
          </a>
          <a
            id="00:01:12.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(72, '00:01:12.029')}
          >
            for people with different goals and of different ages,{' '}
          </a>
          <a
            id="00:01:15.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(75, '00:01:15.829')}
          >
            and we get deep into the weeds of, for instance,{' '}
          </a>
          <a
            id="00:01:18.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(78, '00:01:18.949')}
          >
            how does one know whether or not their testosterone{' '}
          </a>
          <a
            id="00:01:21.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(81, '00:01:21.389')}
          >
            is optimized or not?{' '}
          </a>
          <a
            id="00:01:23.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(83, '00:01:23.029')}
          >
            How often to test for specific hormones,{' '}
          </a>
          <a
            id="00:01:25.308"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(85, '00:01:25.308')}
          >
            such as testosterone and other hormones,{' '}
          </a>
          <a
            id="00:01:27.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(87, '00:01:27.269')}
          >
            and really how to gauge how good one should feel.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:01:32.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(92, '00:01:32.029')}
          >
            This is something that's often overlooked{' '}
          </a>
          <a
            id="00:01:33.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(93, '00:01:33.469')}
          >
            in discussions about hormone optimization{' '}
          </a>
          <a
            id="00:01:35.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(95, '00:01:35.709')}
          >
            or health optimization of any kind for that matter.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:01:38.429"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(98, '00:01:38.429')}
          >
            For instance, people will talk about reduced libido{' '}
          </a>
          <a
            id="00:01:41.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(101, '00:01:41.709')}
          >
            and discuss whether or not testosterone levels are to blame,{' '}
          </a>
          <a
            id="00:01:45.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(105, '00:01:45.189')}
          >
            but how does one calibrate their libido in the first place?{' '}
          </a>
          <a
            id="00:01:47.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(107, '00:01:47.789')}
          >
            That is, how does one know whether or not their libido{' '}
          </a>
          <a
            id="00:01:50.028"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(110, '00:01:50.028')}
          >
            is normal, too low, or too high?{' '}
          </a>
          <br />
          <br />
          <a
            id="00:01:53.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(113, '00:01:53.829')}
          >
            We also discuss, for instance,{' '}
          </a>
          <a
            id="00:01:55.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(115, '00:01:55.189')}
          >
            whether or not hormone optimization{' '}
          </a>
          <a
            id="00:01:56.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(116, '00:01:56.949')}
          >
            should be pursued continually throughout the year.{' '}
          </a>
          <a
            id="00:01:59.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(119, '00:01:59.069')}
          >
            For instance, whether or not you should cycle{' '}
          </a>
          <a
            id="00:02:00.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(120, '00:02:00.749')}
          >
            on and off supplements and or prescription drugs{' '}
          </a>
          <a
            id="00:02:03.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(123, '00:02:03.629')}
          >
            geared towards hormone optimization.{' '}
          </a>
          <a
            id="00:02:05.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(125, '00:02:05.709')}
          >
            And we discuss the behavioral foundations{' '}
          </a>
          <a
            id="00:02:08.468"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(128, '00:02:08.468')}
          >
            of optimal hormone function.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:02:10.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(130, '00:02:10.149')}
          >
            These are things that every male should be doing{' '}
          </a>
          <a
            id="00:02:12.429"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(132, '00:02:12.429')}
          >
            and various things they should actively avoid{' '}
          </a>
          <a
            id="00:02:15.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(135, '00:02:15.029')}
          >
            if their goal is to have healthy hormones{' '}
          </a>
          <a
            id="00:02:17.429"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(137, '00:02:17.429')}
          >
            and to quote unquote optimize their levels of every hormone{' '}
          </a>
          <a
            id="00:02:21.589"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(141, '00:02:21.589')}
          >
            from growth hormone to testosterone at any stage of life.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:02:24.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(144, '00:02:24.789')}
          >
            And while today's discussion{' '}
          </a>
          <a
            id="00:02:25.869"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(145, '00:02:25.869')}
          >
            is about male hormone optimization,{' '}
          </a>
          <a
            id="00:02:27.429"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(147, '00:02:27.429')}
          >
            I want to emphasize that we discuss all the various ages{' '}
          </a>
          <a
            id="00:02:30.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(150, '00:02:30.709')}
          >
            for male hormone optimization.{' '}
          </a>
          <a
            id="00:02:32.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(152, '00:02:32.709')}
          >
            So for those of you that are parents,{' '}
          </a>
          <a
            id="00:02:34.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(154, '00:02:34.709')}
          >
            for those of you that are young,{' '}
          </a>
          <a
            id="00:02:36.429"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(156, '00:02:36.429')}
          >
            those of you that are middle-aged or old or teenagers,{' '}
          </a>
          <a
            id="00:02:39.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(159, '00:02:39.709')}
          >
            we explore adolescent, puberty, teen, and late teens,{' '}
          </a>
          <a
            id="00:02:44.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(164, '00:02:44.629')}
          >
            early adulthood, adulthood, and into the late geriatric ages.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:02:49.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(169, '00:02:49.029')}
          >
            So regardless of your age{' '}
          </a>
          <a
            id="00:02:50.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(170, '00:02:50.069')}
          >
            and whether or not you are male or female,{' '}
          </a>
          <a
            id="00:02:52.049"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(172, '00:02:52.049')}
          >
            today's episode ought to be of interest to you.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:02:54.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(174, '00:02:54.509')}
          >
            I should also point out{' '}
          </a>
          <a
            id="00:02:55.809"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(175, '00:02:55.809')}
          >
            that we will soon also be hosting an expert guest{' '}
          </a>
          <a
            id="00:02:58.348"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(178, '00:02:58.348')}
          >
            on female hormone optimization.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:03:00.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(180, '00:03:00.509')}
          >
            One thing that I'm certain people of all ages{' '}
          </a>
          <a
            id="00:03:02.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(182, '00:03:02.469')}
          >
            and biological sex will enjoy about today's conversation{' '}
          </a>
          <a
            id="00:03:06.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(186, '00:03:06.109')}
          >
            is that we also get into descriptions{' '}
          </a>
          <a
            id="00:03:07.809"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(187, '00:03:07.809')}
          >
            of how psychology and life events impact hormones{' '}
          </a>
          <a
            id="00:03:11.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(191, '00:03:11.189')}
          >
            and how hormones impact our psychology{' '}
          </a>
          <a
            id="00:03:13.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(193, '00:03:13.669')}
          >
            and the way that we show up to various life events.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:03:16.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(196, '00:03:16.149')}
          >
            So today is really a broad overview{' '}
          </a>
          <a
            id="00:03:18.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(198, '00:03:18.469')}
          >
            that goes all the way down to fine details{' '}
          </a>
          <a
            id="00:03:20.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(200, '00:03:20.909')}
          >
            about male hormone optimization.{' '}
          </a>
          <a
            id="00:03:22.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(202, '00:03:22.669')}
          >
            And I'm certain that by the end of today's episode,{' '}
          </a>
          <a
            id="00:03:25.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(205, '00:03:25.069')}
          >
            you'll have an immense amount of new information{' '}
          </a>
          <a
            id="00:03:27.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(207, '00:03:27.549')}
          >
            about how this endocrine,{' '}
          </a>
          <a
            id="00:03:28.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(208, '00:03:28.789')}
          >
            that is hormone system in your body works{' '}
          </a>
          <a
            id="00:03:31.589"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(211, '00:03:31.589')}
          >
            and how it interacts with your brain and other tissues{' '}
          </a>
          <a
            id="00:03:35.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(215, '00:03:35.269')}
          >
            and many, many actionable tools that you can pursue{' '}
          </a>
          <a
            id="00:03:38.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(218, '00:03:38.749')}
          >
            regardless of stage of life.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:03:40.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(220, '00:03:40.309')}
          >
            Before we begin, I'd like to emphasize{' '}
          </a>
          <a
            id="00:03:41.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(221, '00:03:41.909')}
          >
            that this podcast is separate{' '}
          </a>
          <a
            id="00:03:43.169"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(223, '00:03:43.169')}
          >
            from my teaching and research roles at Stanford.{' '}
          </a>
          <a
            id="00:03:45.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(225, '00:03:45.309')}
          >
            It is however, part of my desire and effort{' '}
          </a>
          <a
            id="00:03:47.209"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(227, '00:03:47.209')}
          >
            to bring zero cost to consumer information{' '}
          </a>
          <a
            id="00:03:49.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(229, '00:03:49.229')}
          >
            about science and science-related tools{' '}
          </a>
          <a
            id="00:03:51.348"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(231, '00:03:51.348')}
          >
            to the general public,{' '}
          </a>
          <a
            id="00:03:52.529"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(232, '00:03:52.529')}
          >
            in keeping with that theme,{' '}
          </a>
          <a
            id="00:03:53.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(233, '00:03:53.629')}
          >
            I'd like to thank the sponsors of today's podcast.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:03:56.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(236, '00:03:56.309')}
          >
            Our first sponsor is Thesis.{' '}
          </a>
          <a
            id="00:03:58.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(238, '00:03:58.549')}
          >
            Thesis makes custom nootropics.{' '}
          </a>
          <a
            id="00:04:00.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(240, '00:04:00.749')}
          >
            And as I've said many times before on this podcast,{' '}
          </a>
          <a
            id="00:04:03.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(243, '00:04:03.549')}
          >
            I am not a fan of the word nootropics{' '}
          </a>
          <a
            id="00:04:05.869"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(245, '00:04:05.869')}
          >
            because it means smart drugs.{' '}
          </a>
          <a
            id="00:04:07.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(247, '00:04:07.789')}
          >
            And frankly, there are no specific neural circuits{' '}
          </a>
          <a
            id="00:04:10.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(250, '00:04:10.349')}
          >
            in the brain or body for being quote unquote smart.{' '}
          </a>
          <a
            id="00:04:13.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(253, '00:04:13.389')}
          >
            Thesis understands this{' '}
          </a>
          <a
            id="00:04:14.869"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(254, '00:04:14.869')}
          >
            and they've developed custom nootropics{' '}
          </a>
          <a
            id="00:04:16.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(256, '00:04:16.989')}
          >
            that are designed to bring your brain and body{' '}
          </a>
          <a
            id="00:04:18.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(258, '00:04:18.829')}
          >
            into the state that's ideal{' '}
          </a>
          <a
            id="00:04:20.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(260, '00:04:20.309')}
          >
            for what you need to accomplish.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:04:22.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(262, '00:04:22.469')}
          >
            They use the highest quality ingredients,{' '}
          </a>
          <a
            id="00:04:23.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(263, '00:04:23.949')}
          >
            things like phosphatidylserine, alpha-GPC,{' '}
          </a>
          <a
            id="00:04:26.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(266, '00:04:26.909')}
          >
            many ingredients I've talked about before on this podcast{' '}
          </a>
          <a
            id="00:04:29.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(269, '00:04:29.349')}
          >
            and that I happen to use myself.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:04:31.169"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(271, '00:04:31.169')}
          >
            I've been using Thesis for over a year now{' '}
          </a>
          <a
            id="00:04:32.928"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(272, '00:04:32.928')}
          >
            and I can confidently say{' '}
          </a>
          <a
            id="00:04:33.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(273, '00:04:33.949')}
          >
            that their nootropics have been a game changer.{' '}
          </a>
          <a
            id="00:04:36.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(276, '00:04:36.309')}
          >
            For me, I like their nootropic for clarity.{' '}
          </a>
          <a
            id="00:04:39.169"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(279, '00:04:39.169')}
          >
            I use that before cognitive work often{' '}
          </a>
          <a
            id="00:04:41.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(281, '00:04:41.509')}
          >
            and I like their nootropic for energy{' '}
          </a>
          <a
            id="00:04:43.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(283, '00:04:43.549')}
          >
            and I often use that before workouts,{' '}
          </a>
          <a
            id="00:04:45.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(285, '00:04:45.109')}
          >
            in particular workouts that are especially intense.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:04:48.729"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(288, '00:04:48.729')}
          >
            To get your own personalized nootropic starter kit,{' '}
          </a>
          <a
            id="00:04:50.589"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(290, '00:04:50.589')}
          >
            go online to takethesis.com slash Huberman,{' '}
          </a>
          <a
            id="00:04:53.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(293, '00:04:53.109')}
          >
            take their three-minute quiz{' '}
          </a>
          <a
            id="00:04:54.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(294, '00:04:54.189')}
          >
            and Thesis will send you four different formulas{' '}
          </a>
          <a
            id="00:04:56.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(296, '00:04:56.309')}
          >
            to try in your first month.{' '}
          </a>
          <a
            id="00:04:57.428"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(297, '00:04:57.428')}
          >
            Again, that's takethesis.com slash Huberman{' '}
          </a>
          <a
            id="00:05:00.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(300, '00:05:00.269')}
          >
            and use the code Huberman at checkout{' '}
          </a>
          <a
            id="00:05:02.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(302, '00:05:02.069')}
          >
            to get 10% off your first box.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:05:04.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(304, '00:05:04.149')}
          >
            Today's episode is also brought to us by Roka.{' '}
          </a>
          <a
            id="00:05:06.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(306, '00:05:06.709')}
          >
            Roka makes eyeglasses and sunglasses{' '}
          </a>
          <a
            id="00:05:08.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(308, '00:05:08.789')}
          >
            that are the absolute highest quality.{' '}
          </a>
          <a
            id="00:05:11.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(311, '00:05:11.069')}
          >
            The company was founded by two all-American swimmers{' '}
          </a>
          <a
            id="00:05:13.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(313, '00:05:13.109')}
          >
            from Stanford and everything about Roka eyeglasses{' '}
          </a>
          <a
            id="00:05:15.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(315, '00:05:15.669')}
          >
            and sunglasses were designed with performance in mind.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:05:18.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(318, '00:05:18.629')}
          >
            I've spent a lifetime working on the biology,{' '}
          </a>
          <a
            id="00:05:20.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(320, '00:05:20.389')}
          >
            the visual system and I can tell you{' '}
          </a>
          <a
            id="00:05:21.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(321, '00:05:21.909')}
          >
            that your visual system has to contend{' '}
          </a>
          <a
            id="00:05:23.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(323, '00:05:23.669')}
          >
            with an enormous number of challenges{' '}
          </a>
          <a
            id="00:05:25.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(325, '00:05:25.149')}
          >
            in order for you to see clearly.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:05:26.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(326, '00:05:26.549')}
          >
            For instance, when you move from a sunny area{' '}
          </a>
          <a
            id="00:05:28.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(328, '00:05:28.269')}
          >
            to a shady area and back again,{' '}
          </a>
          <a
            id="00:05:30.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(330, '00:05:30.069')}
          >
            whether or not you're looking at something up close{' '}
          </a>
          <a
            id="00:05:31.609"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(331, '00:05:31.609')}
          >
            or off into the distance,{' '}
          </a>
          <a
            id="00:05:32.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(332, '00:05:32.889')}
          >
            Roka understands the biology of the visual system{' '}
          </a>
          <a
            id="00:05:35.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(335, '00:05:35.229')}
          >
            and has designed their eyeglasses and sunglasses accordingly{' '}
          </a>
          <a
            id="00:05:38.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(338, '00:05:38.029')}
          >
            so that you always see with perfect clarity.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:05:40.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(340, '00:05:40.309')}
          >
            Roka eyeglasses and sunglasses were initially designed{' '}
          </a>
          <a
            id="00:05:43.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(343, '00:05:43.269')}
          >
            for activities such as running and cycling{' '}
          </a>
          <a
            id="00:05:45.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(345, '00:05:45.749')}
          >
            and indeed they are very lightweight.{' '}
          </a>
          <a
            id="00:05:47.269"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(347, '00:05:47.269')}
          >
            Most of the time I can't even remember{' '}
          </a>
          <a
            id="00:05:48.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(348, '00:05:48.669')}
          >
            that they're on my face, they're so lightweight.{' '}
          </a>
          <a
            id="00:05:50.689"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(350, '00:05:50.689')}
          >
            But the important thing to know{' '}
          </a>
          <a
            id="00:05:51.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(351, '00:05:51.829')}
          >
            about Roka eyeglasses and sunglasses{' '}
          </a>
          <a
            id="00:05:53.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(353, '00:05:53.469')}
          >
            is that while they can be used during sports activities,{' '}
          </a>
          <a
            id="00:05:57.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(357, '00:05:57.109')}
          >
            they also have a terrific aesthetic{' '}
          </a>
          <a
            id="00:05:58.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(358, '00:05:58.989')}
          >
            and they can be used just as well{' '}
          </a>
          <a
            id="00:06:00.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(360, '00:06:00.749')}
          >
            for wearing to work or out to dinner, et cetera.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:06:03.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(363, '00:06:03.909')}
          >
            If you'd like to try Roka eyeglasses and sunglasses,{' '}
          </a>
          <a
            id="00:06:06.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(366, '00:06:06.349')}
          >
            you can go to Roka, that's R-O-K-A.com{' '}
          </a>
          <a
            id="00:06:09.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(369, '00:06:09.189')}
          >
            and enter the code Huberman{' '}
          </a>
          <a
            id="00:06:10.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(370, '00:06:10.669')}
          >
            to save 20% off on your first order.{' '}
          </a>
          <a
            id="00:06:12.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(372, '00:06:12.709')}
          >
            Again, that's Roka, R-O-K-A.com{' '}
          </a>
          <a
            id="00:06:14.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(374, '00:06:14.949')}
          >
            and enter the code Huberman at checkout.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:06:17.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(377, '00:06:17.189')}
          >
            Today's episode is also brought to us by Helix Sleep.{' '}
          </a>
          <a
            id="00:06:19.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(379, '00:06:19.989')}
          >
            Helix makes mattresses and pillows{' '}
          </a>
          <a
            id="00:06:21.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(381, '00:06:21.549')}
          >
            that are of the absolute highest quality.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:06:23.589"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(383, '00:06:23.589')}
          >
            I started sleeping on a Helix mattress well over a year ago{' '}
          </a>
          <a
            id="00:06:26.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(386, '00:06:26.349')}
          >
            and it's been the best sleep that I've ever had.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:06:28.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(388, '00:06:28.949')}
          >
            One of the things that makes Helix mattresses so unique{' '}
          </a>
          <a
            id="00:06:31.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(391, '00:06:31.509')}
          >
            is that they match the design of the mattress{' '}
          </a>
          <a
            id="00:06:33.329"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(393, '00:06:33.329')}
          >
            to your unique sleep needs.{' '}
          </a>
          <a
            id="00:06:34.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(394, '00:06:34.989')}
          >
            So for instance, if you go onto their website,{' '}
          </a>
          <a
            id="00:06:36.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(396, '00:06:36.549')}
          >
            you can take a brief quiz,{' '}
          </a>
          <a
            id="00:06:37.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(397, '00:06:37.669')}
          >
            it's only takes about two or three minutes{' '}
          </a>
          <a
            id="00:06:39.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(399, '00:06:39.829')}
          >
            and you'll answer questions{' '}
          </a>
          <a
            id="00:06:40.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(400, '00:06:40.669')}
          >
            like do you tend to run hot or cold throughout the night{' '}
          </a>
          <a
            id="00:06:42.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(402, '00:06:42.989')}
          >
            or whether or not you sleep on your back,{' '}
          </a>
          <a
            id="00:06:44.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(404, '00:06:44.389')}
          >
            your side of your stomach, or maybe you don't know.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:06:46.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(406, '00:06:46.949')}
          >
            Regardless, they will match you to the custom mattress{' '}
          </a>
          <a
            id="00:06:49.669"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(409, '00:06:49.669')}
          >
            that's ideal for your sleep needs.{' '}
          </a>
          <a
            id="00:06:51.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(411, '00:06:51.309')}
          >
            For me, that was the Dusk D-U-S-K mattress,{' '}
          </a>
          <a
            id="00:06:53.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(413, '00:06:53.989')}
          >
            which for me was not too firm, not too soft{' '}
          </a>
          <a
            id="00:06:55.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(415, '00:06:55.909')}
          >
            and was ideal for my sleep patterns.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:06:58.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(418, '00:06:58.349')}
          >
            You take the quiz and you'll find out{' '}
          </a>
          <a
            id="00:06:59.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(419, '00:06:59.829')}
          >
            what mattress is ideal for your sleep patterns.{' '}
          </a>
          <a
            id="00:07:02.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(422, '00:07:02.069')}
          >
            So if you're interested in upgrading your mattress,{' '}
          </a>
          <a
            id="00:07:03.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(423, '00:07:03.749')}
          >
            go to helixsleep.com slash Huberman,{' '}
          </a>
          <a
            id="00:07:06.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(426, '00:07:06.389')}
          >
            take their brief sleep quiz{' '}
          </a>
          <a
            id="00:07:07.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(427, '00:07:07.509')}
          >
            and they'll match you to a customized mattress{' '}
          </a>
          <a
            id="00:07:09.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(429, '00:07:09.109')}
          >
            and you'll get up to $200 off any mattress order{' '}
          </a>
          <a
            id="00:07:11.729"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(431, '00:07:11.729')}
          >
            and two free pillows.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:07:13.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(433, '00:07:13.229')}
          >
            They have a 10 year warranty{' '}
          </a>
          <a
            id="00:07:14.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(434, '00:07:14.309')}
          >
            and you get to try out the mattress{' '}
          </a>
          <a
            id="00:07:15.509"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(435, '00:07:15.509')}
          >
            for a hundred nights risk-free.{' '}
          </a>
          <a
            id="00:07:17.489"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(437, '00:07:17.489')}
          >
            Again, if you're interested,{' '}
          </a>
          <a
            id="00:07:18.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(438, '00:07:18.389')}
          >
            you can go to helixsleep.com slash Huberman{' '}
          </a>
          <a
            id="00:07:20.869"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(440, '00:07:20.869')}
          >
            for up to $200 off and two free pillows.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:07:23.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(443, '00:07:23.349')}
          >
            The Huberman Lab Podcast{' '}
          </a>
          <a
            id="00:07:24.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(444, '00:07:24.469')}
          >
            is now partnered with Momentus Supplements.{' '}
          </a>
          <a
            id="00:07:26.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(446, '00:07:26.309')}
          >
            To find the supplements we discuss{' '}
          </a>
          <a
            id="00:07:27.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(447, '00:07:27.629')}
          >
            on the Huberman Lab Podcast,{' '}
          </a>
          <a
            id="00:07:28.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(448, '00:07:28.829')}
          >
            you can go to Live Momentus, spelled O-U-S,{' '}
          </a>
          <a
            id="00:07:31.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(451, '00:07:31.469')}
          >
            livemomentus.com slash Huberman.{' '}
          </a>
          <a
            id="00:07:34.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(454, '00:07:34.029')}
          >
            And I should just mention that the library{' '}
          </a>
          <a
            id="00:07:35.428"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(455, '00:07:35.428')}
          >
            of those supplements is constantly expanding.{' '}
          </a>
          <a
            id="00:07:37.609"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(457, '00:07:37.609')}
          >
            Again, that's livemomentus.com slash Huberman.{' '}
          </a>
          <br />
          <br />
          <a
            id="00:07:40.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(460, '00:07:40.749')}
          >
            And now for my discussion with Dr. Kyle Gillette.{' '}
          </a>
          <a
            id="00:07:44.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(464, '00:07:44.109')}
          >
            Dr. Gillette, great to have you back.{' '}
          </a>
          <a
            id="00:07:46.469"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(466, '00:07:46.469')}
          >
            Great to be back, thank you.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:07:47.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(467, '00:07:47.437')}
          >
            You{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:07:48.584"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(468, '00:07:48.584')}
          >
            I'd like to begin with a question{' '}
          </a>
          <a
            id="00:07:50.064"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(470, '00:07:50.064')}
          >
            about one of the most mysterious{' '}
          </a>
          <a
            id="00:07:52.384"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(472, '00:07:52.384')}
          >
            and important phases of life, which is puberty.{' '}
          </a>
          <a
            id="00:07:57.544"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(477, '00:07:57.544')}
          >
            I've long wondered whether or not{' '}
          </a>
          <a
            id="00:07:59.924"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(479, '00:07:59.924')}
          >
            how quickly somebody goes into puberty,{' '}
          </a>
          <a
            id="00:08:02.664"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(482, '00:08:02.664')}
          >
            so at what age and how long puberty takes.{' '}
          </a>
          <a
            id="00:08:06.384"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(486, '00:08:06.384')}
          >
            So how brief or protracted that puberty is{' '}
          </a>
          <a
            id="00:08:08.504"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(488, '00:08:08.504')}
          >
            for them to acquire{' '}
          </a>
          <a
            id="00:08:09.864"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(489, '00:08:09.864')}
          >
            the so-called secondary sexual characteristics,{' '}
          </a>
          <a
            id="00:08:11.944"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(491, '00:08:11.944')}
          >
            things like hair growth on the face for males{' '}
          </a>
          <a
            id="00:08:14.464"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(494, '00:08:14.464')}
          >
            or changes in bone and muscle density and growth, et cetera.{' '}
          </a>
          <a
            id="00:08:19.264"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(499, '00:08:19.264')}
          >
            You know, when I was in middle school and high school,{' '}
          </a>
          <a
            id="00:08:21.944"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(501, '00:08:21.944')}
          >
            I noticed that some people transitioned{' '}
          </a>
          <a
            id="00:08:23.424"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(503, '00:08:23.424')}
          >
            into all that very fast,{' '}
          </a>
          <a
            id="00:08:24.584"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(504, '00:08:24.584')}
          >
            and some people took a long time{' '}
          </a>
          <a
            id="00:08:27.144"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(507, '00:08:27.144')}
          >
            to acquire those characteristics.{' '}
          </a>
          <a
            id="00:08:29.704"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(509, '00:08:29.704')}
          >
            Can we learn anything about ourselves, our hormones,{' '}
          </a>
          <a
            id="00:08:34.064"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(514, '00:08:34.064')}
          >
            and maybe even how long we're going to live{' '}
          </a>
          <a
            id="00:08:36.224"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(516, '00:08:36.224')}
          >
            based on the time in which we enter puberty{' '}
          </a>
          <a
            id="00:08:39.384"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(519, '00:08:39.384')}
          >
            and how long it takes us to progress through puberty?{' '}
          </a>
          <a
            id="00:08:42.224"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(522, '00:08:42.224')}
          >
            I guess that also raises the question,{' '}
          </a>
          <a
            id="00:08:43.824"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(523, '00:08:43.824')}
          >
            does puberty ever truly end?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:08:46.702"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(526, '00:08:46.702')}
          >
            There are many takeaways from puberty.{' '}
          </a>
          <a
            id="00:08:49.102"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(529, '00:08:49.102')}
          >
            Some of the actionable items from it is,{' '}
          </a>
          <a
            id="00:08:52.142"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(532, '00:08:52.142')}
          >
            yes, it can and does affect your adult height{' '}
          </a>
          <a
            id="00:08:56.442"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(536, '00:08:56.442')}
          >
            and also stature and also body composition.{' '}
          </a>
          <a
            id="00:09:00.782"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(540, '00:09:00.782')}
          >
            So puberty is a time,{' '}
          </a>
          <a
            id="00:09:03.262"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(543, '00:09:03.262')}
          >
            and if we're talking specifically about males,{' '}
          </a>
          <a
            id="00:09:07.262"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(547, '00:09:07.262')}
          >
            think of it as a time where if you have obesity as a child,{' '}
          </a>
          <a
            id="00:09:13.162"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(553, '00:09:13.162')}
          >
            you could potentially use that time{' '}
          </a>
          <a
            id="00:09:16.062"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(556, '00:09:16.062')}
          >
            to change your lifestyle and habits and reset things,{' '}
          </a>
          <a
            id="00:09:18.622"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(558, '00:09:18.622')}
          >
            and it is a bit easier.{' '}
          </a>
          <a
            id="00:09:20.542"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(560, '00:09:20.542')}
          >
            It's almost like a free injection of testosterone{' '}
          </a>
          <a
            id="00:09:24.542"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(564, '00:09:24.542')}
          >
            and metabolism and drive and effort into your life.{' '}
          </a>
          <a
            id="00:09:28.062"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(568, '00:09:28.062')}
          >
            There's a wide variation in how quickly puberty goes through.{' '}
          </a>
          <a
            id="00:09:33.142"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(573, '00:09:33.142')}
          >
            So there's stages called tanner stages,{' '}
          </a>
          <a
            id="00:09:35.722"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(575, '00:09:35.722')}
          >
            which we don't necessarily need to get into,{' '}
          </a>
          <a
            id="00:09:37.782"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(577, '00:09:37.782')}
          >
            but if you enter puberty very early,{' '}
          </a>
          <a
            id="00:09:40.342"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(580, '00:09:40.342')}
          >
            then it can decrease your adult height or stature.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:09:44.364"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(584, '00:09:44.364')}
          >
            So for a given male that enters puberty at 13{' '}
          </a>
          <a
            id="00:09:49.064"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(589, '00:09:49.064')}
          >
            versus a male that enters puberty at 15,{' '}
          </a>
          <a
            id="00:09:52.304"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(592, '00:09:52.304')}
          >
            can we say that the guy that entered puberty at 13{' '}
          </a>
          <a
            id="00:09:55.744"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(595, '00:09:55.744')}
          >
            is going to be shorter than the guy{' '}
          </a>
          <a
            id="00:09:57.344"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(597, '00:09:57.344')}
          >
            that entered puberty at 15,{' '}
          </a>
          <a
            id="00:09:59.504"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(599, '00:09:59.504')}
          >
            or it's not quite that straightforward?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:10:01.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(601, '00:10:01.407')}
          >
            If they are identical twins,{' '}
          </a>
          <a
            id="00:10:03.687"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(603, '00:10:03.687')}
          >
            and the individual who entered puberty at age 13{' '}
          </a>
          <a
            id="00:10:06.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(606, '00:10:06.167')}
          >
            also finished puberty,{' '}
          </a>
          <a
            id="00:10:08.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(608, '00:10:08.327')}
          >
            went all the way through the Tanner stages,{' '}
          </a>
          <a
            id="00:10:09.967"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(609, '00:10:09.967')}
          >
            and if you do a bone scan,{' '}
          </a>
          <a
            id="00:10:11.287"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(611, '00:10:11.287')}
          >
            which I believe is usually done on the left wrist,{' '}
          </a>
          <a
            id="00:10:14.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(614, '00:10:14.007')}
          >
            and it says, yes, your growth plates are mostly closed,{' '}
          </a>
          <a
            id="00:10:16.367"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(616, '00:10:16.367')}
          >
            you're not gonna grow more{' '}
          </a>
          <a
            id="00:10:18.027"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(618, '00:10:18.027')}
          >
            than a couple inches of height after that.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:10:20.206"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(620, '00:10:20.206')}
          >
            Okay, just a related question.{' '}
          </a>
          <a
            id="00:10:23.966"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(623, '00:10:23.966')}
          >
            When I was growing up, it was thought,{' '}
          </a>
          <a
            id="00:10:26.406"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(626, '00:10:26.406')}
          >
            or at least people would say,{' '}
          </a>
          <a
            id="00:10:27.926"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(627, '00:10:27.926')}
          >
            that resistance training in particular,{' '}
          </a>
          <a
            id="00:10:30.606"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(630, '00:10:30.606')}
          >
            lifting heavy weights could stunt one's growth.{' '}
          </a>
          <a
            id="00:10:33.666"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(633, '00:10:33.666')}
          >
            Is that true or false?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:10:36.895"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(636, '00:10:36.895')}
          >
            It is false when you're talking about just lifting heavyweights.{' '}
          </a>
          <a
            id="00:10:40.515"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(640, '00:10:40.515')}
          >
            Dirty bulking certainly has the potential to stunt one's growth for two main mechanisms.{' '}
          </a>
          <a
            id="00:10:45.695"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(645, '00:10:45.695')}
          >
            Could you define dirty bulking?{' '}
          </a>
          <a
            id="00:10:47.695"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(647, '00:10:47.695')}
          >
            Dirty bulking is eating an excess of calories,{' '}
          </a>
          <a
            id="00:10:51.275"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(651, '00:10:51.275')}
          >
            not just to acquire lean metabolically active body mass or get stronger,{' '}
          </a>
          <a
            id="00:10:57.695"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(657, '00:10:57.695')}
          >
            but purposely acquiring body fat.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:11:02.478"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(662, '00:11:02.478')}
          >
            So purposely acquiring muscle and fat by overeating.{' '}
          </a>
          <a
            id="00:11:06.838"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(666, '00:11:06.838')}
          >
            Yes.{' '}
          </a>
          <a
            id="00:11:07.678"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(667, '00:11:07.678')}
          >
            And lifting weights can stunt one's growth.{' '}
          </a>
          <a
            id="00:11:10.638"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(670, '00:11:10.638')}
          >
            Do I have that correct?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:11:11.793"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(671, '00:11:11.793')}
          >
            Correct.{' '}
          </a>
          <a
            id="00:11:12.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(672, '00:11:12.873')}
          >
            So it does two things.{' '}
          </a>
          <a
            id="00:11:14.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(674, '00:11:14.553')}
          >
            If you're doing it as a very young child,{' '}
          </a>
          <a
            id="00:11:16.513"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(676, '00:11:16.513')}
          >
            it can, that fat can become leptin resistant{' '}
          </a>
          <a
            id="00:11:20.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(680, '00:11:20.553')}
          >
            and it can produce more leptin.{' '}
          </a>
          <a
            id="00:11:22.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(682, '00:11:22.433')}
          >
            And that leptin can activate the hypothalamus,{' '}
          </a>
          <a
            id="00:11:25.833"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(685, '00:11:25.833')}
          >
            which activates the pituitary,{' '}
          </a>
          <a
            id="00:11:27.893"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(687, '00:11:27.893')}
          >
            which releases gonadotropins,{' '}
          </a>
          <a
            id="00:11:29.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(689, '00:11:29.273')}
          >
            which basically just increase testosterone and estrogen{' '}
          </a>
          <a
            id="00:11:31.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(691, '00:11:31.873')}
          >
            earlier than it otherwise would have.{' '}
          </a>
          <a
            id="00:11:33.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(693, '00:11:33.633')}
          >
            It's the same mechanism behind why childhood obesity{' '}
          </a>
          <a
            id="00:11:37.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(697, '00:11:37.193')}
          >
            causes early puberty.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:11:38.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(698, '00:11:38.017')}
          >
            Interesting. I do remember a paper published in Science Magazine,{' '}
          </a>
          <a
            id="00:11:42.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(702, '00:11:42.017')}
          >
            I believe it was focused mainly on females,{' '}
          </a>
          <a
            id="00:11:45.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(705, '00:11:45.017')}
          >
            but showing that when enough body fat accumulates,{' '}
          </a>
          <a
            id="00:11:48.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(708, '00:11:48.017')}
          >
            the hormone leptin is secreted and that triggers the onset of puberty.{' '}
          </a>
          <a
            id="00:11:51.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(711, '00:11:51.017')}
          >
            Correct.{' '}
          </a>
          <a
            id="00:11:52.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(712, '00:11:52.017')}
          >
            Given the increase in childhood obesity that we're observing now,{' '}
          </a>
          <a
            id="00:11:57.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(717, '00:11:57.017')}
          >
            are we seeing an earlier onset of puberty in males and females?{' '}
          </a>
          <a
            id="00:12:01.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(721, '00:12:01.017')}
          >
            Yes.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:12:01.794"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(721, '00:12:01.794')}
          >
            Yes, in both males and females.{' '}
          </a>
          <a
            id="00:12:03.794"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(723, '00:12:03.794')}
          >
            Not to get too technical, but there's a G-protein-coupled receptor on the hypothalamus
            and leptin directly binds it,{' '}
          </a>
          <a
            id="00:12:09.794"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(729, '00:12:09.794')}
          >
            so it does appear directly causatory and not just correlation.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:12:14.652"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(734, '00:12:14.652')}
          >
            Okay. So, and if I understand correctly,{' '}
          </a>
          <a
            id="00:12:16.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(736, '00:12:16.272')}
          >
            what you're saying is for a young guy, let's say 13, 14,{' '}
          </a>
          <a
            id="00:12:20.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(740, '00:12:20.992')}
          >
            who wants to really bulk up and deliberately,{' '}
          </a>
          <a
            id="00:12:23.192"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(743, '00:12:23.192')}
          >
            deliberately, excuse me,{' '}
          </a>
          <a
            id="00:12:24.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(744, '00:12:24.272')}
          >
            overeats and is doing their squats and deadlifts{' '}
          </a>
          <a
            id="00:12:27.352"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(747, '00:12:27.352')}
          >
            and bench presses and really trying to get big,{' '}
          </a>
          <a
            id="00:12:30.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(750, '00:12:30.312')}
          >
            they will get big, but only in the lateral dimension.{' '}
          </a>
          <a
            id="00:12:33.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(753, '00:12:33.592')}
          >
            They are effectively limiting their total height{' '}
          </a>
          <a
            id="00:12:38.092"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(758, '00:12:38.092')}
          >
            and it can shut down the long bone growth of their limbs.{' '}
          </a>
          <a
            id="00:12:41.512"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(761, '00:12:41.512')}
          >
            Is that correct?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:12:42.057"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(762, '00:12:42.057')}
          >
            Correct. The growth of the long bones is mostly related to the estradiol-alpha receptor,{' '}
          </a>
          <a
            id="00:12:47.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(767, '00:12:47.657')}
          >
            so basically one of the receptors for estrogen which can be secondary to early puberty{' '}
          </a>
          <a
            id="00:12:53.337"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(773, '00:12:53.337')}
          >
            and also is related to body fat because you have that conversion of testosterone to
            estrogen.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:13:00.114"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(780, '00:13:00.114')}
          >
            So can we assume that if a young male{' '}
          </a>
          <a
            id="00:13:04.354"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(784, '00:13:04.354')}
          >
            wants to get into resistance training,{' '}
          </a>
          <a
            id="00:13:06.874"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(786, '00:13:06.874')}
          >
            that body weight exercises are probably okay,{' '}
          </a>
          <a
            id="00:13:10.154"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(790, '00:13:10.154')}
          >
            and maybe even some weight training, kettlebells, et cetera,{' '}
          </a>
          <a
            id="00:13:13.674"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(793, '00:13:13.674')}
          >
            but that they should avoid doing so-called dirty bulking,{' '}
          </a>
          <a
            id="00:13:16.734"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(796, '00:13:16.734')}
          >
            trying to deliberately gain weight up until what age?{' '}
          </a>
          <a
            id="00:13:20.514"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(800, '00:13:20.514')}
          >
            Until puberty is over?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:13:23.097"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(803, '00:13:23.097')}
          >
            I would say an individual should limit the amount of abnormal body fat accumulation or{' '}
          </a>
          <a
            id="00:13:29.597"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(809, '00:13:29.597')}
          >
            dirty bulking indefinitely throughout their entire life.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:13:32.446"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(812, '00:13:32.446')}
          >
            So again, if I understand correctly,{' '}
          </a>
          <a
            id="00:13:34.806"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(814, '00:13:34.806')}
          >
            that recommendation to avoid deliberate weight gain{' '}
          </a>
          <a
            id="00:13:38.206"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(818, '00:13:38.206')}
          >
            or rapid weight gain is not just to allow an individual{' '}
          </a>
          <a
            id="00:13:42.926"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(822, '00:13:42.926')}
          >
            to reach their maximum height,{' '}
          </a>
          <a
            id="00:13:44.886"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(824, '00:13:44.886')}
          >
            but also to avoid laying down a lot of body fat cells.{' '}
          </a>
          <a
            id="00:13:48.766"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(828, '00:13:48.766')}
          >
            Correct.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:13:49.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(829, '00:13:49.439')}
          >
            Correct. The balance between that is when you are going through puberty, you are{' '}
          </a>
          <a
            id="00:13:54.599"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(834, '00:13:54.599')}
          >
            able to add a lot of lean body mass, not just muscle mass, but bone mass and other{' '}
          </a>
          <a
            id="00:13:59.359"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(839, '00:13:59.359')}
          >
            mass as well.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:14:00.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(840, '00:14:00.357')}
          >
            I started lifting weights when I was 16{' '}
          </a>
          <a
            id="00:14:02.837"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(842, '00:14:02.837')}
          >
            and I confess I trained pretty heavy at times.{' '}
          </a>
          <a
            id="00:14:07.077"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(847, '00:14:07.077')}
          >
            I don't know whether or not{' '}
          </a>
          <a
            id="00:14:07.917"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(847, '00:14:07.917')}
          >
            I would have been taller than I am now.{' '}
          </a>
          <a
            id="00:14:10.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(850, '00:14:10.437')}
          >
            But when I started that training,{' '}
          </a>
          <a
            id="00:14:12.597"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(852, '00:14:12.597')}
          >
            I had already reached what was at least close{' '}
          </a>
          <a
            id="00:14:15.797"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(855, '00:14:15.797')}
          >
            to my predicted height.{' '}
          </a>
          <a
            id="00:14:17.997"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(857, '00:14:17.997')}
          >
            I can't say that I deliberately waited until I'd grown.{' '}
          </a>
          <a
            id="00:14:20.557"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(860, '00:14:20.557')}
          >
            It just so happened that I stumbled into the weight room{' '}
          </a>
          <a
            id="00:14:22.777"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(862, '00:14:22.777')}
          >
            and found that I liked it at age 16,{' '}
          </a>
          <a
            id="00:14:25.157"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(865, '00:14:25.157')}
          >
            at which point I was already the height that I am now.{' '}
          </a>
          <a
            id="00:14:28.297"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(868, '00:14:28.297')}
          >
            So in any case, what I'm hearing is that laying down{' '}
          </a>
          <a
            id="00:14:31.517"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(871, '00:14:31.517')}
          >
            a lot of excess body fat is not a good idea.{' '}
          </a>
          <a
            id="00:14:34.557"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(874, '00:14:34.557')}
          >
            What if somebody grows up chubby or fat?{' '}
          </a>
          <a
            id="00:14:38.717"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(878, '00:14:38.717')}
          >
            For whatever reason,{' '}
          </a>
          <a
            id="00:14:39.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(879, '00:14:39.957')}
          >
            reasons related to the eating patterns in their family,{' '}
          </a>
          <a
            id="00:14:42.037"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(882, '00:14:42.037')}
          >
            maybe even some genetic reasons,{' '}
          </a>
          <a
            id="00:14:43.917"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(883, '00:14:43.917')}
          >
            is it safe and or wise for a young person?{' '}
          </a>
          <a
            id="00:14:48.077"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(888, '00:14:48.077')}
          >
            So let's say somebody who's around the age of puberty{' '}
          </a>
          <a
            id="00:14:51.077"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(891, '00:14:51.077')}
          >
            or even younger or in their late teens{' '}
          </a>
          <a
            id="00:14:53.637"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(893, '00:14:53.637')}
          >
            to be dieting and actively trying to lose body fat.{' '}
          </a>
          <a
            id="00:14:56.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(896, '00:14:56.437')}
          >
            Is that safe?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:14:58.475"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(898, '00:14:58.475')}
          >
            Under the supervision of a physician, it is certainly safe to change your body
            composition.{' '}
          </a>
          <a
            id="00:15:02.875"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(902, '00:15:02.875')}
          >
            In pediatric obesity medicine, you're often talking about a recomposition or a
            renormalization{' '}
          </a>
          <a
            id="00:15:10.635"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(910, '00:15:10.635')}
          >
            of the growth curve compared to peers.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:15:13.426"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(913, '00:15:13.426')}
          >
            Great, thank you.{' '}
          </a>
          <a
            id="00:15:14.626"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(914, '00:15:14.626')}
          >
            So as you may have sensed,{' '}
          </a>
          <a
            id="00:15:16.066"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(916, '00:15:16.066')}
          >
            we started chronologically with puberty.{' '}
          </a>
          <a
            id="00:15:18.226"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(918, '00:15:18.226')}
          >
            And I know that there's another puberty{' '}
          </a>
          <a
            id="00:15:20.486"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(920, '00:15:20.486')}
          >
            that even precedes the puberty that we're all familiar with.{' '}
          </a>
          <a
            id="00:15:23.386"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(923, '00:15:23.386')}
          >
            Maybe if you want to just briefly mention that,{' '}
          </a>
          <a
            id="00:15:25.146"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(925, '00:15:25.146')}
          >
            because I was talking with you about this before we started.{' '}
          </a>
          <a
            id="00:15:27.826"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(927, '00:15:27.826')}
          >
            The puberty that I'm most familiar with,{' '}
          </a>
          <a
            id="00:15:30.466"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(930, '00:15:30.466')}
          >
            and I think most people are most familiar with,{' '}
          </a>
          <a
            id="00:15:32.406"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(932, '00:15:32.406')}
          >
            the acquisition of deepening of the voice,{' '}
          </a>
          <a
            id="00:15:35.026"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(935, '00:15:35.026')}
          >
            growth of muscle and bone, body hair,{' '}
          </a>
          <a
            id="00:15:38.346"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(938, '00:15:38.346')}
          >
            acquisition of libido and things like that.{' '}
          </a>
          <a
            id="00:15:40.426"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(940, '00:15:40.426')}
          >
            That's actually the second puberty that we all go through.{' '}
          </a>
          <a
            id="00:15:43.146"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(943, '00:15:43.146')}
          >
            Maybe just mention for us and educate us{' '}
          </a>
          <a
            id="00:15:44.786"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(944, '00:15:44.786')}
          >
            on the first puberty.{' '}
          </a>
          <a
            id="00:15:45.865"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(945, '00:15:45.865')}
          >
            I think most people will be hearing this{' '}
          </a>
          <a
            id="00:15:49.266"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(949, '00:15:49.266')}
          >
            for the very first time.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:15:50.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(950, '00:15:50.804')}
          >
            The first puberty of everyone's life is the first three months of their life.{' '}
          </a>
          <a
            id="00:15:55.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(955, '00:15:55.804')}
          >
            You may notice that your baby has more acne the first three months{' '}
          </a>
          <a
            id="00:15:59.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(959, '00:15:59.804')}
          >
            and that they also have in general just more changes related to androgens and estrogens,{' '}
          </a>
          <a
            id="00:16:06.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(966, '00:16:06.804')}
          >
            perhaps oilier skin,{' '}
          </a>
          <a
            id="00:16:09.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(969, '00:16:09.804')}
          >
            even more genital growth during the first three months.{' '}
          </a>
          <a
            id="00:16:14.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(974, '00:16:14.804')}
          >
            And this is mostly due to DHEA, which is an adrenal hormone.{' '}
          </a>
          <a
            id="00:16:18.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(978, '00:16:18.804')}
          >
            The second puberty or the puberty that most people know of actually starts that same way
            as well.{' '}
          </a>
          <a
            id="00:16:22.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(982, '00:16:22.804')}
          >
            It's called adrenarche and it's when the adrenals kick in, I guess, for the second time.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:16:28.975"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(988, '00:16:28.975')}
          >
            Is there a standard age or age range{' '}
          </a>
          <a
            id="00:16:31.375"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(991, '00:16:31.375')}
          >
            in which the testicles descend in males?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:16:35.253"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(995, '00:16:35.253')}
          >
            usually before birth.{' '}
          </a>
          <a
            id="00:16:36.993"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(996, '00:16:36.993')}
          >
            It is not uncommon to have one or even two{' '}
          </a>
          <a
            id="00:16:40.213"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1000, '00:16:40.213')}
          >
            undescended testes,{' '}
          </a>
          <a
            id="00:16:41.693"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1001, '00:16:41.693')}
          >
            but there is a risk of testicular cancer,{' '}
          </a>
          <a
            id="00:16:43.533"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1003, '00:16:43.533')}
          >
            especially if they're not fixed early,{' '}
          </a>
          <a
            id="00:16:45.853"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1005, '00:16:45.853')}
          >
            and also heat damage to the testes.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:16:49.546"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1009, '00:16:49.546')}
          >
            Well, thank you for that coverage of the two puberties.{' '}
          </a>
          <a
            id="00:16:51.826"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1011, '00:16:51.826')}
          >
            So early in life, I imagine some of our listeners{' '}
          </a>
          <a
            id="00:16:54.106"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1014, '00:16:54.106')}
          >
            are probably still in one or the other puberty.{' '}
          </a>
          <a
            id="00:16:58.506"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1018, '00:16:58.506')}
          >
            The ones that are in the first puberty,{' '}
          </a>
          <a
            id="00:16:59.586"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1019, '00:16:59.586')}
          >
            obviously aren't aware that they're listening{' '}
          </a>
          <a
            id="00:17:01.346"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1021, '00:17:01.346')}
          >
            to this podcast, but maybe it'll be embedded{' '}
          </a>
          <a
            id="00:17:03.426"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1023, '00:17:03.426')}
          >
            in their subconscious.{' '}
          </a>
          <a
            id="00:17:04.706"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1024, '00:17:04.706')}
          >
            But some listeners probably are still in puberty,{' '}
          </a>
          <a
            id="00:17:07.586"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1027, '00:17:07.586')}
          >
            but I think everyone can remember back to their puberty{' '}
          </a>
          <a
            id="00:17:09.526"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1029, '00:17:09.526')}
          >
            and roughly when they first entered puberty{' '}
          </a>
          <a
            id="00:17:11.466"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1031, '00:17:11.466')}
          >
            and how quickly they aggregated{' '}
          </a>
          <a
            id="00:17:12.986"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1032, '00:17:12.986')}
          >
            the secondary sex characteristics.{' '}
          </a>
          <a
            id="00:17:15.906"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1035, '00:17:15.906')}
          >
            I'd like to turn now to a general question{' '}
          </a>
          <a
            id="00:17:18.786"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1038, '00:17:18.786')}
          >
            about what all males ought to do{' '}
          </a>
          <a
            id="00:17:21.586"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1041, '00:17:21.586')}
          >
            in order to optimize their hormones.{' '}
          </a>
          <a
            id="00:17:24.186"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1044, '00:17:24.186')}
          >
            So if you could just list off the things{' '}
          </a>
          <a
            id="00:17:25.586"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1045, '00:17:25.586')}
          >
            that all males should do on a daily basis, weekly basis,{' '}
          </a>
          <a
            id="00:17:29.466"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1049, '00:17:29.466')}
          >
            I mean, should guys in their teens and 20s{' '}
          </a>
          <a
            id="00:17:31.666"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1051, '00:17:31.666')}
          >
            be getting their blood work done?{' '}
          </a>
          <a
            id="00:17:33.666"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1053, '00:17:33.666')}
          >
            Should they be taking supplements?{' '}
          </a>
          <a
            id="00:17:35.266"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1055, '00:17:35.266')}
          >
            We already talked about weight training.{' '}
          </a>
          <a
            id="00:17:36.746"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1056, '00:17:36.746')}
          >
            What should they be doing?{' '}
          </a>
          <a
            id="00:17:37.586"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1057, '00:17:37.586')}
          >
            What should they avoid doing if the goal is to have{' '}
          </a>
          <a
            id="00:17:40.546"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1060, '00:17:40.546')}
          >
            a long arc of healthy hormone optimization{' '}
          </a>
          <a
            id="00:17:43.346"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1063, '00:17:43.346')}
          >
            throughout the lifespan?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:17:44.086"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1064, '00:17:44.086')}
          >
            There's many things that you should do.{' '}
          </a>
          <a
            id="00:17:47.806"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1067, '00:17:47.806')}
          >
            An analogy that I often make is{' '}
          </a>
          <a
            id="00:17:50.086"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1070, '00:17:50.086')}
          >
            when there's a brand new car{' '}
          </a>
          <a
            id="00:17:51.406"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1071, '00:17:51.406')}
          >
            that comes off the assembly line,{' '}
          </a>
          <a
            id="00:17:53.006"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1073, '00:17:53.006')}
          >
            you do a full scope of diagnostic workup,{' '}
          </a>
          <a
            id="00:17:55.326"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1075, '00:17:55.326')}
          >
            hook it up to the computer.{' '}
          </a>
          <a
            id="00:17:56.886"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1076, '00:17:56.886')}
          >
            I think we should do the same thing with humans as well.{' '}
          </a>
          <a
            id="00:17:59.566"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1079, '00:17:59.566')}
          >
            During puberty,{' '}
          </a>
          <a
            id="00:18:01.206"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1081, '00:18:01.206')}
          >
            obviously you're a functioning human,{' '}
          </a>
          <a
            id="00:18:03.246"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1083, '00:18:03.246')}
          >
            but I would say there's still development.{' '}
          </a>
          <a
            id="00:18:06.246"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1086, '00:18:06.246')}
          >
            I think that the human always develops.{' '}
          </a>
          <a
            id="00:18:08.846"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1088, '00:18:08.846')}
          >
            I don't think development ever ends.{' '}
          </a>
          <a
            id="00:18:13.846"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1093, '00:18:13.846')}
          >
            It's a person's lifespan.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:18:16.756"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1096, '00:18:16.756')}
          >
            Oh, sorry, so for blood work, I mean,{' '}
          </a>
          <a
            id="00:18:19.396"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1099, '00:18:19.396')}
          >
            what would be the earliest, let me put it this way.{' '}
          </a>
          <a
            id="00:18:23.436"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1103, '00:18:23.436')}
          >
            If blood work didn't cost anything{' '}
          </a>
          <a
            id="00:18:27.276"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1107, '00:18:27.276')}
          >
            and everyone could get it,{' '}
          </a>
          <a
            id="00:18:28.476"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1108, '00:18:28.476')}
          >
            when would you want to see everybody{' '}
          </a>
          <a
            id="00:18:30.276"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1110, '00:18:30.276')}
          >
            get their blood work done for the first time?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:18:33.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1113, '00:18:33.631')}
          >
            Obviously individuals under the age of 18 should talk with their parents about this.{' '}
          </a>
          <a
            id="00:18:38.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1118, '00:18:38.631')}
          >
            And as long as the parents and the child kind of agree{' '}
          </a>
          <a
            id="00:18:42.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1122, '00:18:42.631')}
          >
            and the parents are on board with this as well, you can start getting blood work.{' '}
          </a>
          <a
            id="00:18:47.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1127, '00:18:47.631')}
          >
            Often a child will come in with complaints of either precocious puberty or delayed
            puberty,{' '}
          </a>
          <a
            id="00:18:52.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1132, '00:18:52.631')}
          >
            and this individual might be 9 or this individual might be 15.{' '}
          </a>
          <a
            id="00:18:57.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1137, '00:18:57.631')}
          >
            For a healthy child, when they're going through kind of their later tanner stages,{' '}
          </a>
          <a
            id="00:19:02.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1142, '00:19:02.631')}
          >
            4 and 5, so they've developed several secondary sexual characteristics,{' '}
          </a>
          <a
            id="00:19:05.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1145, '00:19:05.631')}
          >
            they might have hair growth or starting to notice more beard growth,{' '}
          </a>
          <a
            id="00:19:11.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1151, '00:19:11.631')}
          >
            that's a good time to do it.{' '}
          </a>
          <a
            id="00:19:13.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1153, '00:19:13.631')}
          >
            If you're concerned with stature or height{' '}
          </a>
          <a
            id="00:19:16.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1156, '00:19:16.631')}
          >
            or if you're not tracking along where most members of your family have,{' '}
          </a>
          <a
            id="00:19:20.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1160, '00:19:20.631')}
          >
            not just their height and stature but also the timing of their puberty,{' '}
          </a>
          <a
            id="00:19:25.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1165, '00:19:25.631')}
          >
            then that's time to get labs.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:19:28.390"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1168, '00:19:28.390')}
          >
            Right, so if I could travel back in time,{' '}
          </a>
          <a
            id="00:19:31.470"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1171, '00:19:31.470')}
          >
            I would have gotten my blood work done for hormones{' '}
          </a>
          <a
            id="00:19:33.830"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1173, '00:19:33.830')}
          >
            and lipids and everything else at 18.{' '}
          </a>
          <a
            id="00:19:36.429"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1176, '00:19:36.429')}
          >
            I unfortunately didn't know where and how to get that.{' '}
          </a>
          <a
            id="00:19:39.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1179, '00:19:39.310')}
          >
            And I didn't have any pressing clinical issues.{' '}
          </a>
          <a
            id="00:19:41.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1181, '00:19:41.350')}
          >
            And so I think the first time that I got my blood work done,{' '}
          </a>
          <a
            id="00:19:44.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1184, '00:19:44.310')}
          >
            I was in my late twenties, maybe even my early thirties.{' '}
          </a>
          <a
            id="00:19:47.830"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1187, '00:19:47.830')}
          >
            And I'm still dying to know what my blood work was{' '}
          </a>
          <a
            id="00:19:51.230"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1191, '00:19:51.230')}
          >
            when, for instance, I was 17 and I felt a certain way.{' '}
          </a>
          <a
            id="00:19:54.550"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1194, '00:19:54.550')}
          >
            And I confess that in many dimensions,{' '}
          </a>
          <a
            id="00:19:57.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1197, '00:19:57.750')}
          >
            I actually feel better now at, I'll be 47 soon,{' '}
          </a>
          <a
            id="00:20:00.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1200, '00:20:00.750')}
          >
            at 47 than I did in my teens and twenties.{' '}
          </a>
          <a
            id="00:20:03.410"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1203, '00:20:03.410')}
          >
            And I think it was more on the psychological side.{' '}
          </a>
          <a
            id="00:20:06.150"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1206, '00:20:06.150')}
          >
            I think that, but in terms of just understanding{' '}
          </a>
          <a
            id="00:20:10.290"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1210, '00:20:10.290')}
          >
            why we felt great or why we felt or feel terrible{' '}
          </a>
          <a
            id="00:20:14.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1214, '00:20:14.750')}
          >
            or not so great, I think blood work{' '}
          </a>
          <a
            id="00:20:16.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1216, '00:20:16.510')}
          >
            is extremely informative.{' '}
          </a>
          <a
            id="00:20:17.870"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1217, '00:20:17.870')}
          >
            What do you think are the key things{' '}
          </a>
          <a
            id="00:20:19.730"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1219, '00:20:19.730')}
          >
            to look for in blood work?{' '}
          </a>
          <a
            id="00:20:21.110"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1221, '00:20:21.110')}
          >
            I mean, testosterone is always the topic that comes up{' '}
          </a>
          <a
            id="00:20:23.710"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1223, '00:20:23.710')}
          >
            in the context of male hormone optimization,{' '}
          </a>
          <a
            id="00:20:25.570"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1225, '00:20:25.570')}
          >
            but certainly there are a lot of other hormones{' '}
          </a>
          <a
            id="00:20:26.950"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1226, '00:20:26.950')}
          >
            that are important as well.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:20:28.499"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1228, '00:20:28.499')}
          >
            And with testosterone, you want to get either testosterone and a SHBG or a free
            testosterone.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:20:34.135"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1234, '00:20:34.135')}
          >
            Could you define SHBG for our listeners, please?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:20:36.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1236, '00:20:36.059')}
          >
            It is sex hormone-binding globulin.{' '}
          </a>
          <a
            id="00:20:38.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1238, '00:20:38.059')}
          >
            It is the protein that binds up all androgens and estrogen in the body.{' '}
          </a>
          <a
            id="00:20:43.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1243, '00:20:43.059')}
          >
            So the stronger the androgen, the stronger it binds.{' '}
          </a>
          <a
            id="00:20:46.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1246, '00:20:46.059')}
          >
            During puberty, strong androgens,{' '}
          </a>
          <a
            id="00:20:49.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1249, '00:20:49.059')}
          >
            especially DHT, which is the strongest bioidentical androgen,{' '}
          </a>
          <a
            id="00:20:53.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1253, '00:20:53.059')}
          >
            has a huge role, a prominent role in secondary sexual characteristics.{' '}
          </a>
          <a
            id="00:20:59.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1259, '00:20:59.059')}
          >
            And if your SHBG is very high,{' '}
          </a>
          <a
            id="00:21:02.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1262, '00:21:02.059')}
          >
            then your DHT can run higher because it's not metabolized,{' '}
          </a>
          <a
            id="00:21:05.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1265, '00:21:05.059')}
          >
            but there's not quite as much free DHT.{' '}
          </a>
          <a
            id="00:21:07.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1267, '00:21:07.059')}
          >
            So you want to balance between a high enough free DHT{' '}
          </a>
          <a
            id="00:21:12.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1272, '00:21:12.059')}
          >
            and a high enough total DHT.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:21:13.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1273, '00:21:13.437')}
          >
            And obviously these blood tests are going to have to be read and interpreted by a
            qualified{' '}
          </a>
          <a
            id="00:21:18.517"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1278, '00:21:18.517')}
          >
            physician.{' '}
          </a>
          <a
            id="00:21:19.517"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1279, '00:21:19.517')}
          >
            Most people aren't going to be in a position to evaluate them properly, or at least not{' '}
          </a>
          <a
            id="00:21:23.037"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1283, '00:21:23.037')}
          >
            with the full depth that they could if they had an MD like yourself looking at them.{' '}
          </a>
          <a
            id="00:21:27.197"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1287, '00:21:27.197')}
          >
            Okay, so everyone should get blood work as early as possible, depending on their budget{' '}
          </a>
          <a
            id="00:21:32.037"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1292, '00:21:32.037')}
          >
            and availability.{' '}
          </a>
          <a
            id="00:21:34.397"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1294, '00:21:34.397')}
          >
            What should everybody do in terms of monitoring those markers?{' '}
          </a>
          <a
            id="00:21:39.037"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1299, '00:21:39.037')}
          >
            So assuming that there's no major intervention, how often do you recommend that people
            get{' '}
          </a>
          <a
            id="00:21:43.637"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1303, '00:21:43.637')}
          >
            their blood work done?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:21:46.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1306, '00:21:46.225')}
          >
            Let's say, let's take an individual who just turned 18,{' '}
          </a>
          <a
            id="00:21:49.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1309, '00:21:49.225')}
          >
            they just got their first set of blood work.{' '}
          </a>
          <a
            id="00:21:51.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1311, '00:21:51.225')}
          >
            They'll probably find something in it that they may want to optimize{' '}
          </a>
          <a
            id="00:21:54.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1314, '00:21:54.225')}
          >
            using shared decision-making with their physician.{' '}
          </a>
          <a
            id="00:21:57.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1317, '00:21:57.225')}
          >
            Usually a good follow-up is about six months.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:21:58.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1318, '00:21:58.949')}
          >
            months. Okay. So twice a year,{' '}
          </a>
          <a
            id="00:22:01.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1321, '00:22:01.029')}
          >
            getting blood work done and having a physician evaluate it.{' '}
          </a>
          <a
            id="00:22:04.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1324, '00:22:04.749')}
          >
            That sounds reasonable to me.{' '}
          </a>
          <a
            id="00:22:05.809"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1325, '00:22:05.809')}
          >
            And for those that didn't initiate this at 18, such as myself,{' '}
          </a>
          <a
            id="00:22:10.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1330, '00:22:10.149')}
          >
            it's the best time to start then would be as soon as possible. Yeah. Right.{' '}
          </a>
          <a
            id="00:22:14.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1334, '00:22:14.749')}
          >
            In terms of the other things that all males should do,{' '}
          </a>
          <a
            id="00:22:18.029"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1338, '00:22:18.029')}
          >
            meaning all males of all ages, puberty and beyond should do,{' '}
          </a>
          <a
            id="00:22:23.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1343, '00:22:23.549')}
          >
            what, what are some of those things? So on a daily basis,{' '}
          </a>
          <a
            id="00:22:26.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1346, '00:22:26.229')}
          >
            maybe you could just take us through the arc of a day and and push out some of{' '}
          </a>
          <a
            id="00:22:30.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1350, '00:22:30.949')}
          >
            the protocols that you use or the things that you'd like to see your male{' '}
          </a>
          <a
            id="00:22:33.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1353, '00:22:33.789')}
          >
            patients use in order to try and optimize their hormone status.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:22:37.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1357, '00:22:37.897')}
          >
            I'll briefly touch on some of the lifestyle pillars to start.{' '}
          </a>
          <a
            id="00:22:40.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1360, '00:22:40.897')}
          >
            Diet and exercise are the first two.{' '}
          </a>
          <a
            id="00:22:43.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1363, '00:22:43.897')}
          >
            In puberty, sleep is particularly important, of course.{' '}
          </a>
          <a
            id="00:22:46.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1366, '00:22:46.897')}
          >
            But with diet and exercise, throughout a lifespan{' '}
          </a>
          <a
            id="00:22:52.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1372, '00:22:52.897')}
          >
            you want to not exclude things that are helping you.{' '}
          </a>
          <a
            id="00:22:56.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1376, '00:22:56.897')}
          >
            For example, during puberty, if you're consuming dairy{' '}
          </a>
          <a
            id="00:22:59.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1379, '00:22:59.897')}
          >
            and then all of a sudden you cut out all dairy,{' '}
          </a>
          <a
            id="00:23:02.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1382, '00:23:02.897')}
          >
            you're going to lose a lot of weight.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:23:05.099"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1385, '00:23:05.099')}
          >
            And just again for our audience,{' '}
          </a>
          <a
            id="00:23:07.099"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1387, '00:23:07.099')}
          >
            maybe you just mentioned what having enough IGF-1{' '}
          </a>
          <a
            id="00:23:10.099"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1390, '00:23:10.099')}
          >
            can do for us that's beneficial is.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:23:06.129"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1386, '00:23:06.129')}
          >
            We hit a trap.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:23:12.001"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1392, '00:23:12.001')}
          >
            It helps you grow. It helps with genital development, secondary sexual characteristics,{' '}
          </a>
          <a
            id="00:23:17.521"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1397, '00:23:17.521')}
          >
            and long bone growth, skin growth, hair growth, a host of things.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:23:22.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1402, '00:23:22.767')}
          >
            So getting an array of nutrients that include dairy,{' '}
          </a>
          <a
            id="00:23:26.447"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1406, '00:23:26.447')}
          >
            what other sorts of nutrients are important{' '}
          </a>
          <a
            id="00:23:28.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1408, '00:23:28.167')}
          >
            during development?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:23:30.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1410, '00:23:30.631')}
          >
            You want to have adequate vitamin D.{' '}
          </a>
          <a
            id="00:23:32.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1412, '00:23:32.631')}
          >
            Vitamin D helps with testosterone production,{' '}
          </a>
          <a
            id="00:23:34.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1414, '00:23:34.631')}
          >
            it helps again with bone mineralization and stature.{' '}
          </a>
          <a
            id="00:23:38.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1418, '00:23:38.631')}
          >
            After an age of about 25, and there's not a strict cut-off,{' '}
          </a>
          <a
            id="00:23:43.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1423, '00:23:43.631')}
          >
            but up to about an age of 25, optimizing your growth hormone and IGF-1{' '}
          </a>
          <a
            id="00:23:47.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1427, '00:23:47.631')}
          >
            helps with bone density and bone growth.{' '}
          </a>
          <a
            id="00:23:51.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1431, '00:23:51.631')}
          >
            So from the dietary standpoint, you want to have enough free estrogen,{' '}
          </a>
          <a
            id="00:23:56.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1436, '00:23:56.631')}
          >
            not too much when you're growing, but you want to help basically stockpile bone{' '}
          </a>
          <a
            id="00:24:02.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1442, '00:24:02.631')}
          >
            to prevent a risk of osteoporosis or thin bones fractures when you're older.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:24:06.946"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1446, '00:24:06.946')}
          >
            I was someone who broke his left foot five times{' '}
          </a>
          <a
            id="00:24:10.886"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1450, '00:24:10.886')}
          >
            while in high school.{' '}
          </a>
          <a
            id="00:24:12.066"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1452, '00:24:12.066')}
          >
            I can say that whatever young people can do{' '}
          </a>
          <a
            id="00:24:14.366"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1454, '00:24:14.366')}
          >
            to optimize their bone density would be great.{' '}
          </a>
          <a
            id="00:24:16.886"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1456, '00:24:16.886')}
          >
            That problem seems to have resolved itself over time,{' '}
          </a>
          <a
            id="00:24:19.086"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1459, '00:24:19.086')}
          >
            but I don't know, back then I was,{' '}
          </a>
          <a
            id="00:24:21.286"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1461, '00:24:21.286')}
          >
            I did a short run as a vegetarian,{' '}
          </a>
          <a
            id="00:24:22.766"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1462, '00:24:22.766')}
          >
            but I've always been an omnivore.{' '}
          </a>
          <a
            id="00:24:25.166"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1465, '00:24:25.166')}
          >
            I realized that some of this relates to ethics{' '}
          </a>
          <a
            id="00:24:27.446"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1467, '00:24:27.446')}
          >
            and food allergies and things of that sort.{' '}
          </a>
          <a
            id="00:24:29.166"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1469, '00:24:29.166')}
          >
            But would you say that on balance{' '}
          </a>
          <a
            id="00:24:31.786"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1471, '00:24:31.786')}
          >
            that most people would benefit from eating a combination{' '}
          </a>
          <a
            id="00:24:36.086"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1476, '00:24:36.086')}
          >
            of quality proteins from animal sources{' '}
          </a>
          <a
            id="00:24:39.366"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1479, '00:24:39.366')}
          >
            and non-animal sources, fruits, vegetables, and starches?{' '}
          </a>
          <a
            id="00:24:42.926"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1482, '00:24:42.926')}
          >
            I mean, what do you think, for instance,{' '}
          </a>
          <a
            id="00:24:44.226"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1484, '00:24:44.226')}
          >
            about people following a pure carnivore{' '}
          </a>
          <a
            id="00:24:46.486"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1486, '00:24:46.486')}
          >
            or a very pure vegan diet in their 20s and 30s?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:24:51.530"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1491, '00:24:51.530')}
          >
            In their late 20s, it might be a reasonable option.{' '}
          </a>
          <a
            id="00:24:54.650"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1494, '00:24:54.650')}
          >
            In early 20s and certainly teens, it is a horrible idea{' '}
          </a>
          <a
            id="00:24:58.170"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1498, '00:24:58.170')}
          >
            because it is likely to significantly decrease your free androgens so you will{' '}
          </a>
          <a
            id="00:25:02.410"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1502, '00:25:02.410')}
          >
            have less testosterone acting on receptors through the body.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:25:07.207"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1507, '00:25:07.207')}
          >
            Are there any other micronutrients or macronutrients{' '}
          </a>
          <a
            id="00:25:10.047"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1510, '00:25:10.047')}
          >
            that people in their 20s and 30s should emphasize?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:25:13.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1513, '00:25:13.889')}
          >
            We haven't really touched on fatty acids or fiber too much.{' '}
          </a>
          <a
            id="00:25:16.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1516, '00:25:16.889')}
          >
            Fiber is going to be paramount in kind of like setting your set point{' '}
          </a>
          <a
            id="00:25:21.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1521, '00:25:21.889')}
          >
            of your gut microbiome the rest of your life.{' '}
          </a>
          <a
            id="00:25:24.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1524, '00:25:24.889')}
          >
            There is prebiotic fiber,{' '}
          </a>
          <a
            id="00:25:27.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1527, '00:25:27.889')}
          >
            which you could think of as fish food for your good gut microbiome.{' '}
          </a>
          <a
            id="00:25:30.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1530, '00:25:30.889')}
          >
            It's kind of like an aquarium or a fish tank.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:25:34.156"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1534, '00:25:34.156')}
          >
            goldfish swimming around and that the goldfish eating people{' '}
          </a>
          <a
            id="00:25:37.116"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1537, '00:25:37.116')}
          >
            don't eat goldfish people.{' '}
          </a>
          <a
            id="00:25:39.076"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1539, '00:25:39.076')}
          >
            I hope this video helped you{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:25:39.505"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1539, '00:25:39.505')}
          >
            live or dead.{' '}
          </a>
          <a
            id="00:25:41.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1541, '00:25:41.065')}
          >
            Yeah, but any fiber or food{' '}
          </a>
          <a
            id="00:25:43.865"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1543, '00:25:43.865')}
          >
            that you're putting in your gut,{' '}
          </a>
          <a
            id="00:25:45.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1545, '00:25:45.225')}
          >
            it's going to skew your gut microbiome{' '}
          </a>
          <a
            id="00:25:48.425"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1548, '00:25:48.425')}
          >
            towards something that is more beneficial{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:25:51.723"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1551, '00:25:51.723')}
          >
            And would you say that the prebiotic fiber{' '}
          </a>
          <a
            id="00:25:55.363"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1555, '00:25:55.363')}
          >
            and getting essential fatty acids,{' '}
          </a>
          <a
            id="00:25:57.683"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1557, '00:25:57.683')}
          >
            that would be important to do throughout the lifespan{' '}
          </a>
          <a
            id="00:26:00.223"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1560, '00:26:00.223')}
          >
            or just for people in their 20s and 30s?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:26:02.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1562, '00:26:02.152')}
          >
            Throughout the lifespan, particularly important in the teenage, 20s, 30s,{' '}
          </a>
          <a
            id="00:26:07.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1567, '00:26:07.152')}
          >
            because it helps with brain development.{' '}
          </a>
          <a
            id="00:26:10.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1570, '00:26:10.152')}
          >
            You're certainly more of an expert than me when it comes to brain development,{' '}
          </a>
          <a
            id="00:26:15.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1575, '00:26:15.152')}
          >
            but it does continue to develop really throughout the lifespan,{' '}
          </a>
          <a
            id="00:26:18.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1578, '00:26:18.152')}
          >
            but certainly through the 20s and 30s as well.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:26:20.613"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1580, '00:26:20.613')}
          >
            What about taking a multivitamin while you're growing up?{' '}
          </a>
          <a
            id="00:26:23.333"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1583, '00:26:23.333')}
          >
            So many people do that.{' '}
          </a>
          <a
            id="00:26:25.653"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1585, '00:26:25.653')}
          >
            Is it necessary?{' '}
          </a>
          <a
            id="00:26:26.613"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1586, '00:26:26.613')}
          >
            Is it useful?{' '}
          </a>
          <a
            id="00:26:27.453"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1587, '00:26:27.453')}
          >
            And if it's not necessary, is it safe to do anyway?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:26:31.936"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1591, '00:26:31.936')}
          >
            It's generally safe to do anyway.{' '}
          </a>
          <a
            id="00:26:34.656"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1594, '00:26:34.656')}
          >
            I do not think everybody needs a multivitamin.{' '}
          </a>
          <a
            id="00:26:37.956"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1597, '00:26:37.956')}
          >
            The more exclusionary your diet is,{' '}
          </a>
          <a
            id="00:26:40.736"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1600, '00:26:40.736')}
          >
            for example, if you have celiac disease{' '}
          </a>
          <a
            id="00:26:43.616"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1603, '00:26:43.616')}
          >
            or if you're planning on fertility soon,{' '}
          </a>
          <a
            id="00:26:45.776"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1605, '00:26:45.776')}
          >
            then perhaps it's more reasonable to take a multivitamin.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:26:48.440"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1608, '00:26:48.440')}
          >
            In a previous discussion of ours,{' '}
          </a>
          <a
            id="00:26:49.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1609, '00:26:49.800')}
          >
            I asked you about caloric restriction and testosterone.{' '}
          </a>
          <a
            id="00:26:53.200"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1613, '00:26:53.200')}
          >
            And if I recall correctly,{' '}
          </a>
          <a
            id="00:26:54.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1614, '00:26:54.800')}
          >
            the idea was that if somebody is overweight,{' '}
          </a>
          <a
            id="00:26:57.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1617, '00:26:57.100')}
          >
            they have excess fat adipose tissue,{' '}
          </a>
          <a
            id="00:26:59.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1619, '00:26:59.400')}
          >
            then getting rid of some of that adipose tissue{' '}
          </a>
          <a
            id="00:27:02.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1622, '00:27:02.240')}
          >
            through caloric restriction and exercise,{' '}
          </a>
          <a
            id="00:27:04.080"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1624, '00:27:04.080')}
          >
            provided it's done not too fast in a healthy way,{' '}
          </a>
          <a
            id="00:27:06.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1626, '00:27:06.800')}
          >
            is going to be beneficial for testosterone in the long run.{' '}
          </a>
          <a
            id="00:27:10.120"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1630, '00:27:10.120')}
          >
            But that for individuals{' '}
          </a>
          <a
            id="00:27:12.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1632, '00:27:12.220')}
          >
            who are not carrying an excess of body fat,{' '}
          </a>
          <a
            id="00:27:14.200"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1634, '00:27:14.200')}
          >
            caloric restriction is actually going to lower testosterone.{' '}
          </a>
          <a
            id="00:27:17.360"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1637, '00:27:17.360')}
          >
            First of all, do I have that correct?{' '}
          </a>
          <a
            id="00:27:20.320"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1640, '00:27:20.320')}
          >
            And second, are there any addendums to that{' '}
          </a>
          <a
            id="00:27:23.600"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1643, '00:27:23.600')}
          >
            that you'd like to give us now?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:27:26.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1646, '00:27:26.510')}
          >
            That's correct.{' '}
          </a>
          <a
            id="00:27:28.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1648, '00:27:28.510')}
          >
            If you look at an individual in a caloric deficit,{' '}
          </a>
          <a
            id="00:27:31.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1651, '00:27:31.510')}
          >
            several changes will happen.{' '}
          </a>
          <a
            id="00:27:33.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1653, '00:27:33.510')}
          >
            One is that they'll have less building blocks for hormones.{' '}
          </a>
          <a
            id="00:27:37.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1657, '00:27:37.510')}
          >
            Another is that they will be in a catabolic state more often,{' '}
          </a>
          <a
            id="00:27:40.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1660, '00:27:40.510')}
          >
            so that balance of anabolism and catabolism will be different.{' '}
          </a>
          <a
            id="00:27:44.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1664, '00:27:44.510')}
          >
            They'll likely have less signaling from growth hormone and IGF-1,{' '}
          </a>
          <a
            id="00:27:48.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1668, '00:27:48.510')}
          >
            and they'll also have the high SHBG that we defined earlier as the binding protein,{' '}
          </a>
          <a
            id="00:27:53.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1673, '00:27:53.510')}
          >
            so their free androgens and free estrogens will go down.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:27:58.522"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1678, '00:27:58.522')}
          >
            Okay. So we touched on sleep being critical.{' '}
          </a>
          <a
            id="00:28:01.242"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1681, '00:28:01.242')}
          >
            I would say throughout the lifespan,{' '}
          </a>
          <a
            id="00:28:02.682"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1682, '00:28:02.682')}
          >
            try and get enough quality sleep,{' '}
          </a>
          <a
            id="00:28:05.302"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1685, '00:28:05.302')}
          >
            at least 80% of the nights of your life.{' '}
          </a>
          <a
            id="00:28:07.082"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1687, '00:28:07.082')}
          >
            And the other 20% are just what happens{' '}
          </a>
          <a
            id="00:28:09.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1689, '00:28:09.842')}
          >
            when there's noise outside or you're stressed.{' '}
          </a>
          <a
            id="00:28:12.282"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1692, '00:28:12.282')}
          >
            It just, you have an exam{' '}
          </a>
          <a
            id="00:28:13.602"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1693, '00:28:13.602')}
          >
            or you're having a great time for whatever reason.{' '}
          </a>
          <a
            id="00:28:16.082"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1696, '00:28:16.082')}
          >
            There are a lot of good reasons to lose some sleep{' '}
          </a>
          <a
            id="00:28:18.122"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1698, '00:28:18.122')}
          >
            now and again as well.{' '}
          </a>
          <a
            id="00:28:19.522"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1699, '00:28:19.522')}
          >
            But so we have sleep, we've got nutrition.{' '}
          </a>
          <a
            id="00:28:22.962"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1702, '00:28:22.962')}
          >
            And we touched on that.{' '}
          </a>
          <a
            id="00:28:24.162"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1704, '00:28:24.162')}
          >
            We'll get back into supplementation.{' '}
          </a>
          <a
            id="00:28:26.402"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1706, '00:28:26.402')}
          >
            Now, what are some of the other pillars of creating{' '}
          </a>
          <a
            id="00:28:29.162"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1709, '00:28:29.162')}
          >
            the proper environment for hormone optimization?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:28:33.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1713, '00:28:33.065')}
          >
            Stress is probably the next one.{' '}
          </a>
          <a
            id="00:28:36.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1716, '00:28:36.065')}
          >
            During both puberty but also the 20s and 30s,{' '}
          </a>
          <a
            id="00:28:41.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1721, '00:28:41.065')}
          >
            individuals are figuring out how they want to cope with stress{' '}
          </a>
          <a
            id="00:28:45.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1725, '00:28:45.065')}
          >
            and also figuring out what they want to choose to put their effort into.{' '}
          </a>
          <a
            id="00:28:50.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1730, '00:28:50.065')}
          >
            So if someone is overstressed,{' '}
          </a>
          <a
            id="00:28:53.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1733, '00:28:53.065')}
          >
            then it can put all the other lifestyle pillars{' '}
          </a>
          <a
            id="00:28:56.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1736, '00:28:56.065')}
          >
            and then they stop dieting well, they stop exercising,{' '}
          </a>
          <a
            id="00:29:00.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1740, '00:29:00.065')}
          >
            and everything else can go askew.{' '}
          </a>
          <a
            id="00:29:03.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1743, '00:29:03.065')}
          >
            There is also some degree of social component to this,{' '}
          </a>
          <a
            id="00:29:08.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1748, '00:29:08.065')}
          >
            so perhaps I need to add a seventh pillar of social.{' '}
          </a>
          <a
            id="00:29:12.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1752, '00:29:12.065')}
          >
            During your 20s and 30s, you may be forming a family as well,{' '}
          </a>
          <a
            id="00:29:15.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1755, '00:29:15.065')}
          >
            perhaps you have children,{' '}
          </a>
          <a
            id="00:29:17.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1757, '00:29:17.065')}
          >
            and the health of the family unit is going to be vitally important,{' '}
          </a>
          <a
            id="00:29:22.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1762, '00:29:22.065')}
          >
            not necessarily directly for hormone optimization,{' '}
          </a>
          <a
            id="00:29:27.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1767, '00:29:27.065')}
          >
            but it's going to throw everything else off if it's off.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:29:29.039"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1769, '00:29:29.039')}
          >
            And for people that are not starting their own families in their 20s and 30s, can that{' '}
          </a>
          <a
            id="00:29:33.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1773, '00:29:33.719')}
          >
            social connection be extended to friendships and work relationships as well?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:29:30.811"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1770, '00:29:30.811')}
          >
            have.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:29:38.202"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1778, '00:29:38.202')}
          >
            Absolutely. In fact, if someone's not starting a family, it is just as concerning, but
            for other{' '}
          </a>
          <a
            id="00:29:43.722"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1783, '00:29:43.722')}
          >
            reasons. Each individual is going to have their close group of family and friends, and
            if someone{' '}
          </a>
          <a
            id="00:29:48.682"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1788, '00:29:48.682')}
          >
            does not have one of those connections, that's when things can potentially get bad, not
            just{' '}
          </a>
          <a
            id="00:29:54.602"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1794, '00:29:54.602')}
          >
            for them individually, but also society.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:29:57.085"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1797, '00:29:57.085')}
          >
            So when you say stress,{' '}
          </a>
          <a
            id="00:29:58.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1798, '00:29:58.165')}
          >
            you mean learn to manage your stress.{' '}
          </a>
          <a
            id="00:30:00.465"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1800, '00:30:00.465')}
          >
            What does that look like?{' '}
          </a>
          <a
            id="00:30:01.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1801, '00:30:01.565')}
          >
            I mean, if a patient has high blood pressure,{' '}
          </a>
          <a
            id="00:30:04.485"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1804, '00:30:04.485')}
          >
            or even if they don't,{' '}
          </a>
          <a
            id="00:30:06.245"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1806, '00:30:06.245')}
          >
            you just sense that there's stress,{' '}
          </a>
          <a
            id="00:30:07.325"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1807, '00:30:07.325')}
          >
            they have a lot of pressured speech,{' '}
          </a>
          <a
            id="00:30:08.645"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1808, '00:30:08.645')}
          >
            or they're not feeling well,{' '}
          </a>
          <a
            id="00:30:09.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1809, '00:30:09.745')}
          >
            or communicating that they're not doing well,{' '}
          </a>
          <a
            id="00:30:11.885"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1811, '00:30:11.885')}
          >
            what are some of the things that you recommend{' '}
          </a>
          <a
            id="00:30:13.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1813, '00:30:13.565')}
          >
            in order to try and ameliorate that stress?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:30:16.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1816, '00:30:16.745')}
          >
            There's different mindfulness or relaxation techniques.{' '}
          </a>
          <a
            id="00:30:19.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1819, '00:30:19.745')}
          >
            Going outside can often help with this as well.{' '}
          </a>
          <a
            id="00:30:22.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1822, '00:30:22.745')}
          >
            Dietary changes and exercise can help with this too.{' '}
          </a>
          <a
            id="00:30:26.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1826, '00:30:26.745')}
          >
            Some people like prayer or meditation{' '}
          </a>
          <a
            id="00:30:29.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1829, '00:30:29.745')}
          >
            and a lot of people like counseling or therapy{' '}
          </a>
          <a
            id="00:30:32.745"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1832, '00:30:32.745')}
          >
            or even just talking openly with a family member or a friend.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:30:37.366"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1837, '00:30:37.366')}
          >
            what would be some of the other pillars{' '}
          </a>
          <a
            id="00:30:39.206"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1839, '00:30:39.206')}
          >
            for hormone optimization?{' '}
          </a>
          <a
            id="00:30:40.386"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1840, '00:30:40.386')}
          >
            Here, I feel like we're not just talking about people{' '}
          </a>
          <a
            id="00:30:41.846"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1841, '00:30:41.846')}
          >
            in their 20s and 30s, but again,{' '}
          </a>
          <a
            id="00:30:43.086"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1843, '00:30:43.086')}
          >
            we're wrapping our arms around basically puberty onward.{' '}
          </a>
          <a
            id="00:30:47.246"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1847, '00:30:47.246')}
          >
            I mean, gosh, looking back,{' '}
          </a>
          <a
            id="00:30:49.046"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1849, '00:30:49.046')}
          >
            I started meditating pretty early.{' '}
          </a>
          <a
            id="00:30:50.566"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1850, '00:30:50.566')}
          >
            I started weight training and running early.{' '}
          </a>
          <a
            id="00:30:52.246"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1852, '00:30:52.246')}
          >
            I gave some thought to my diet in high school,{' '}
          </a>
          <a
            id="00:30:54.966"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1854, '00:30:54.966')}
          >
            but really it was in college that I started thinking more{' '}
          </a>
          <a
            id="00:30:57.526"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1857, '00:30:57.526')}
          >
            about what I was ingesting and why{' '}
          </a>
          <a
            id="00:30:59.246"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1859, '00:30:59.246')}
          >
            and trying to do better there.{' '}
          </a>
          <a
            id="00:31:00.886"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1860, '00:31:00.886')}
          >
            But people are coming to the table at different stages{' '}
          </a>
          <a
            id="00:31:03.646"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1863, '00:31:03.646')}
          >
            of life and trying to optimize for hormones.{' '}
          </a>
          <a
            id="00:31:07.006"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1867, '00:31:07.006')}
          >
            So what would be some of the additional things{' '}
          </a>
          <a
            id="00:31:09.485"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1869, '00:31:09.485')}
          >
            that everybody should do?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:31:12.179"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1872, '00:31:12.179')}
          >
            Everyone should get outside and find a movement pastime{' '}
          </a>
          <a
            id="00:31:16.479"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1876, '00:31:16.479')}
          >
            to last a lifetime.{' '}
          </a>
          <a
            id="00:31:18.459"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1878, '00:31:18.459')}
          >
            You're gonna get sunlight,{' '}
          </a>
          <a
            id="00:31:19.399"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1879, '00:31:19.399')}
          >
            you're gonna get some degree of heat and cold exposure,{' '}
          </a>
          <a
            id="00:31:22.319"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1882, '00:31:22.319')}
          >
            and you're also just gonna move more.{' '}
          </a>
          <a
            id="00:31:24.519"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1884, '00:31:24.519')}
          >
            Being in an artificial environment{' '}
          </a>
          <a
            id="00:31:26.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1886, '00:31:26.759')}
          >
            where there's artificial lights, artificial air conditioning{' '}
          </a>
          <a
            id="00:31:30.559"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1890, '00:31:30.559')}
          >
            is going to have many effects on your body.{' '}
          </a>
          <a
            id="00:31:35.599"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1895, '00:31:35.599')}
          >
            So that's vital.{' '}
          </a>
          <a
            id="00:31:36.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1896, '00:31:36.719')}
          >
            Another one is finding what your purpose is in life.{' '}
          </a>
          <a
            id="00:31:40.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1900, '00:31:40.439')}
          >
            So I call this spirit, but it's really just{' '}
          </a>
          <a
            id="00:31:42.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1902, '00:31:42.759')}
          >
            the self-actualization component{' '}
          </a>
          <a
            id="00:31:44.579"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1904, '00:31:44.579')}
          >
            of Maslow's hierarchy of needs,{' '}
          </a>
          <a
            id="00:31:46.739"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1906, '00:31:46.739')}
          >
            which is basically your physical needs, your mental needs,{' '}
          </a>
          <a
            id="00:31:48.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1908, '00:31:48.759')}
          >
            and then your purpose in life, what you really like to do.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:31:51.498"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1911, '00:31:51.498')}
          >
            picking some goal or target.{' '}
          </a>
          <a
            id="00:31:53.578"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1913, '00:31:53.578')}
          >
            And I always say that you don't have to stick{' '}
          </a>
          <a
            id="00:31:55.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1915, '00:31:55.258')}
          >
            to the same goal over time.{' '}
          </a>
          <a
            id="00:31:56.298"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1916, '00:31:56.298')}
          >
            Certainly I haven't,{' '}
          </a>
          <a
            id="00:31:57.198"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1917, '00:31:57.198')}
          >
            although I got started early in the science game{' '}
          </a>
          <a
            id="00:31:59.078"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1919, '00:31:59.078')}
          >
            and I'm still in it.{' '}
          </a>
          <a
            id="00:32:00.858"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1920, '00:32:00.858')}
          >
            The idea is not to pick the end goal,{' '}
          </a>
          <a
            id="00:32:03.578"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1923, '00:32:03.578')}
          >
            is to pick a goal.{' '}
          </a>
          <a
            id="00:32:05.138"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1925, '00:32:05.138')}
          >
            And then once you reach that goal to assess{' '}
          </a>
          <a
            id="00:32:08.338"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1928, '00:32:08.338')}
          >
            and then pick another goal and so on.{' '}
          </a>
          <a
            id="00:32:10.098"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1930, '00:32:10.098')}
          >
            I think sometimes when people hear about picking a purpose,{' '}
          </a>
          <a
            id="00:32:11.978"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1931, '00:32:11.978')}
          >
            they're like, oh my goodness, I have to define,{' '}
          </a>
          <a
            id="00:32:13.418"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1933, '00:32:13.418')}
          >
            sort of like naming oneself,{' '}
          </a>
          <a
            id="00:32:15.178"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1935, '00:32:15.178')}
          >
            that you actually can change your goals{' '}
          </a>
          <a
            id="00:32:18.598"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1938, '00:32:18.598')}
          >
            and purpose over time.{' '}
          </a>
          <a
            id="00:32:20.218"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1940, '00:32:20.218')}
          >
            This is terrific.{' '}
          </a>
          <a
            id="00:32:21.058"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1941, '00:32:21.058')}
          >
            Do you suggest that people actively use{' '}
          </a>
          <a
            id="00:32:25.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1945, '00:32:25.258')}
          >
            or avoid supplementation{' '}
          </a>
          <a
            id="00:32:28.498"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1948, '00:32:28.498')}
          >
            prior to doing all these other things?{' '}
          </a>
          <a
            id="00:32:30.098"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1950, '00:32:30.098')}
          >
            I'm somebody that likes to throw the kitchen sink at things,{' '}
          </a>
          <a
            id="00:32:32.218"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1952, '00:32:32.218')}
          >
            but I also like to do things pretty systematically.{' '}
          </a>
          <a
            id="00:32:33.978"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1953, '00:32:33.978')}
          >
            So I always say behaviors first,{' '}
          </a>
          <a
            id="00:32:35.778"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1955, '00:32:35.778')}
          >
            then nutrition, then supplementation,{' '}
          </a>
          <a
            id="00:32:38.058"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1958, '00:32:38.058')}
          >
            and then maybe, and if and only if there's a real need,{' '}
          </a>
          <a
            id="00:32:41.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1961, '00:32:41.258')}
          >
            and of course, working with a doctor, prescription drugs.{' '}
          </a>
          <a
            id="00:32:43.898"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1963, '00:32:43.898')}
          >
            But, you know, there are probably people{' '}
          </a>
          <a
            id="00:32:45.778"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1965, '00:32:45.778')}
          >
            in their 20s or 30s, maybe even in their 50s{' '}
          </a>
          <a
            id="00:32:48.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1968, '00:32:48.258')}
          >
            that aren't feeling great and they want to do something{' '}
          </a>
          <a
            id="00:32:50.338"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1970, '00:32:50.338')}
          >
            in order to be able to train more{' '}
          </a>
          <a
            id="00:32:52.458"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1972, '00:32:52.458')}
          >
            or to feel more confident to seek out social connection.{' '}
          </a>
          <a
            id="00:32:55.978"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1975, '00:32:55.978')}
          >
            They try and go about the whole business{' '}
          </a>
          <a
            id="00:32:58.978"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1978, '00:32:58.978')}
          >
            from the other side as well.{' '}
          </a>
          <a
            id="00:33:01.218"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1981, '00:33:01.218')}
          >
            But what are your thoughts on that?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:33:03.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1983, '00:33:03.284')}
          >
            I see supplements and medications as very similar.{' '}
          </a>
          <a
            id="00:33:06.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1986, '00:33:06.284')}
          >
            One's prescribed and one's not.{' '}
          </a>
          <a
            id="00:33:09.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1989, '00:33:09.284')}
          >
            In general, medications have more side effects{' '}
          </a>
          <a
            id="00:33:12.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1992, '00:33:12.284')}
          >
            or potentially stronger therapeutic with more efficacy.{' '}
          </a>
          <a
            id="00:33:15.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1995, '00:33:15.284')}
          >
            But they're just tools to reach an end goal.{' '}
          </a>
          <a
            id="00:33:18.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(1998, '00:33:18.284')}
          >
            So depending on the goal, if there's an individual that's an athlete,{' '}
          </a>
          <a
            id="00:33:21.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2001, '00:33:21.284')}
          >
            then certainly they should consider supplementation.{' '}
          </a>
          <a
            id="00:33:24.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2004, '00:33:24.284')}
          >
            Or if someone desires optimal or a very high level of cognitive performance,{' '}
          </a>
          <a
            id="00:33:30.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2010, '00:33:30.284')}
          >
            they should also consider supplementation.{' '}
          </a>
          <a
            id="00:33:33.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2013, '00:33:33.284')}
          >
            At the same time, food is medicine and a lot of the benefits you can get in supplements,{' '}
          </a>
          <a
            id="00:33:36.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2016, '00:33:36.284')}
          >
            you can get in food as well. I guess it depends on the person.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:33:38.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2018, '00:33:38.452')}
          >
            and how much time and energy you're willing to spend,{' '}
          </a>
          <a
            id="00:33:40.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2020, '00:33:40.452')}
          >
            and also finances.{' '}
          </a>
          <a
            id="00:33:41.932"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2021, '00:33:41.932')}
          >
            You know, I know that when I was in college,{' '}
          </a>
          <a
            id="00:33:43.172"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2023, '00:33:43.172')}
          >
            I could afford just a few supplements{' '}
          </a>
          <a
            id="00:33:45.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2025, '00:33:45.412')}
          >
            and they were basically whey protein and some fish oil.{' '}
          </a>
          <a
            id="00:33:49.172"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2029, '00:33:49.172')}
          >
            I was fortunate that I was pointing{' '}
          </a>
          <a
            id="00:33:50.372"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2030, '00:33:50.372')}
          >
            the direction of those things and some creatine.{' '}
          </a>
          <a
            id="00:33:52.192"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2032, '00:33:52.192')}
          >
            I couldn't afford much else.{' '}
          </a>
          <a
            id="00:33:54.092"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2034, '00:33:54.092')}
          >
            Over time, of course, I could afford more,{' '}
          </a>
          <a
            id="00:33:55.692"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2035, '00:33:55.692')}
          >
            but it really does often depend on finances.{' '}
          </a>
          <a
            id="00:34:00.172"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2040, '00:34:00.172')}
          >
            Before we get into some specific recommendations{' '}
          </a>
          <a
            id="00:34:03.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2043, '00:34:03.032')}
          >
            to optimize testosterone, estrogen, thyroid,{' '}
          </a>
          <a
            id="00:34:05.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2045, '00:34:05.992')}
          >
            growth hormone, et cetera,{' '}
          </a>
          <a
            id="00:34:07.572"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2047, '00:34:07.572')}
          >
            I want to ask you a question I've been wondering about{' '}
          </a>
          <a
            id="00:34:09.072"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2049, '00:34:09.072')}
          >
            for a long time.{' '}
          </a>
          <a
            id="00:34:10.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2050, '00:34:10.152')}
          >
            You know, so often in the discussion{' '}
          </a>
          <a
            id="00:34:11.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2051, '00:34:11.672')}
          >
            about male hormone optimization,{' '}
          </a>
          <a
            id="00:34:13.352"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2053, '00:34:13.352')}
          >
            people will say, well, you know,{' '}
          </a>
          <a
            id="00:34:16.072"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2056, '00:34:16.072')}
          >
            if your libido is suffering, you know,{' '}
          </a>
          <a
            id="00:34:18.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2058, '00:34:18.632')}
          >
            you might want to be concerned about testosterone{' '}
          </a>
          <a
            id="00:34:21.232"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2061, '00:34:21.232')}
          >
            or even estrogen, right?{' '}
          </a>
          <a
            id="00:34:22.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2062, '00:34:22.272')}
          >
            Because we know that estrogen can impact libido as well.{' '}
          </a>
          <a
            id="00:34:24.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2064, '00:34:24.672')}
          >
            Sometimes having estrogen too low{' '}
          </a>
          <a
            id="00:34:26.572"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2066, '00:34:26.572')}
          >
            is detrimental for libido.{' '}
          </a>
          <a
            id="00:34:28.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2068, '00:34:28.312')}
          >
            Or people will say, you're not recovering from workouts{' '}
          </a>
          <a
            id="00:34:30.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2070, '00:34:30.952')}
          >
            or you're just, or you're feeling kind of depressed.{' '}
          </a>
          <a
            id="00:34:32.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2072, '00:34:32.632')}
          >
            The problem is it's all subjective.{' '}
          </a>
          <a
            id="00:34:34.712"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2074, '00:34:34.712')}
          >
            So how does one know whether or not{' '}
          </a>
          <a
            id="00:34:37.752"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2077, '00:34:37.752')}
          >
            their recovery from workouts, their energy,{' '}
          </a>
          <a
            id="00:34:41.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2081, '00:34:41.032')}
          >
            their confidence, their libido is within a healthy range?{' '}
          </a>
          <a
            id="00:34:44.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2084, '00:34:44.632')}
          >
            I mean, obviously for people in the relationship,{' '}
          </a>
          <a
            id="00:34:46.192"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2086, '00:34:46.192')}
          >
            they can know whether or not their libido matches{' '}
          </a>
          <a
            id="00:34:48.232"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2088, '00:34:48.232')}
          >
            the sort of cadence of the relationship in their partner,{' '}
          </a>
          <a
            id="00:34:51.912"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2091, '00:34:51.912')}
          >
            but how should people think about this{' '}
          </a>
          <a
            id="00:34:54.792"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2094, '00:34:54.792')}
          >
            and maybe even start to talk about it?{' '}
          </a>
          <a
            id="00:34:56.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2096, '00:34:56.152')}
          >
            Because one of the big differences I think{' '}
          </a>
          <a
            id="00:34:57.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2097, '00:34:57.632')}
          >
            between males and females is that{' '}
          </a>
          <a
            id="00:35:00.352"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2100, '00:35:00.352')}
          >
            because females have a monthly cycle,{' '}
          </a>
          <a
            id="00:35:02.912"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2102, '00:35:02.912')}
          >
            they are familiar with the changes that occur{' '}
          </a>
          <a
            id="00:35:05.872"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2105, '00:35:05.872')}
          >
            in their hormones over time,{' '}
          </a>
          <a
            id="00:35:07.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2107, '00:35:07.272')}
          >
            because every 28 days,{' '}
          </a>
          <a
            id="00:35:08.352"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2108, '00:35:08.352')}
          >
            those hormones are changing dramatically{' '}
          </a>
          <a
            id="00:35:09.991"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2109, '00:35:09.991')}
          >
            in ways that impact their physiology and psychology.{' '}
          </a>
          <a
            id="00:35:12.512"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2112, '00:35:12.512')}
          >
            But for males, I feel like there's sort of a dearth{' '}
          </a>
          <a
            id="00:35:15.711"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2115, '00:35:15.711')}
          >
            of language to get into the more subtle aspects of this.{' '}
          </a>
          <a
            id="00:35:19.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2119, '00:35:19.632')}
          >
            It also has to do with privacy issues{' '}
          </a>
          <a
            id="00:35:21.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2121, '00:35:21.152')}
          >
            and people feeling like they don't want to overshare{' '}
          </a>
          <a
            id="00:35:24.112"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2124, '00:35:24.112')}
          >
            too much, not knowing what's appropriate to share.{' '}
          </a>
          <a
            id="00:35:26.872"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2126, '00:35:26.872')}
          >
            But when you talk to a patient who's in their thirties{' '}
          </a>
          <a
            id="00:35:29.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2129, '00:35:29.392')}
          >
            or maybe even their seventies or sixties,{' '}
          </a>
          <a
            id="00:35:30.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2130, '00:35:30.952')}
          >
            it doesn't matter, a male patient,{' '}
          </a>
          <a
            id="00:35:32.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2132, '00:35:32.952')}
          >
            what are you listening for?{' '}
          </a>
          <a
            id="00:35:34.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2134, '00:35:34.672')}
          >
            And I know you're not a psychiatrist,{' '}
          </a>
          <a
            id="00:35:37.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2137, '00:35:37.592')}
          >
            but what are your ears tuned to{' '}
          </a>
          <a
            id="00:35:39.552"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2139, '00:35:39.552')}
          >
            in order to try and figure out{' '}
          </a>
          <a
            id="00:35:40.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2140, '00:35:40.672')}
          >
            whether or not this person could really use some help{' '}
          </a>
          <a
            id="00:35:42.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2142, '00:35:42.392')}
          >
            with hormone optimization{' '}
          </a>
          <a
            id="00:35:43.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2143, '00:35:43.592')}
          >
            or whether or not something else,{' '}
          </a>
          <a
            id="00:35:44.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2144, '00:35:44.992')}
          >
            or maybe they're just doing great{' '}
          </a>
          <a
            id="00:35:46.152"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2146, '00:35:46.152')}
          >
            and they don't realize it{' '}
          </a>
          <a
            id="00:35:46.991"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2146, '00:35:46.991')}
          >
            because they're placing demands on themselves{' '}
          </a>
          <a
            id="00:35:48.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2148, '00:35:48.632')}
          >
            that are excessive.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:35:50.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2150, '00:35:50.229')}
          >
            You want to use a lot of open-ended questions.{' '}
          </a>
          <a
            id="00:35:53.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2153, '00:35:53.229')}
          >
            This process is called motivational interviewing.{' '}
          </a>
          <a
            id="00:35:56.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2156, '00:35:56.229')}
          >
            And your goal is to listen to the patient{' '}
          </a>
          <a
            id="00:35:59.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2159, '00:35:59.229')}
          >
            and not plant an idea in their mind that they can follow.{' '}
          </a>
          <a
            id="00:36:04.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2164, '00:36:04.229')}
          >
            Because everybody is going to have a different goal.{' '}
          </a>
          <a
            id="00:36:07.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2167, '00:36:07.229')}
          >
            Some people are better at reading their biofeedback{' '}
          </a>
          <a
            id="00:36:10.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2170, '00:36:10.229')}
          >
            or telling how they feel on a daily basis.{' '}
          </a>
          <a
            id="00:36:14.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2174, '00:36:14.229')}
          >
            There is screening questionnaires designed, for example,{' '}
          </a>
          <a
            id="00:36:17.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2177, '00:36:17.229')}
          >
            on Adam Questionnaire to look at men's health{' '}
          </a>
          <a
            id="00:36:20.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2180, '00:36:20.229')}
          >
            and hormone-related health.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:35:50.482"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2150, '00:35:50.482')}
          >
            League.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:36:22.662"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2182, '00:36:22.662')}
          >
            It's called an Adam Questionnaire?{' '}
          </a>
          <a
            id="00:36:24.142"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2184, '00:36:24.142')}
          >
            Adam Questionnaire.{' '}
          </a>
          <a
            id="00:36:24.982"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2184, '00:36:24.982')}
          >
            A-D-A-M?{' '}
          </a>
          <a
            id="00:36:25.802"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2185, '00:36:25.802')}
          >
            Correct.{' '}
          </a>
          <a
            id="00:36:26.642"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2186, '00:36:26.642')}
          >
            Is it available online that people{' '}
          </a>
          <a
            id="00:36:27.462"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2187, '00:36:27.462')}
          >
            could administer it to themselves?{' '}
          </a>
          <a
            id="00:36:28.902"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2188, '00:36:28.902')}
          >
            Although we don't want people making clinical diagnoses{' '}
          </a>
          <a
            id="00:36:30.942"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2190, '00:36:30.942')}
          >
            of themselves or anyone else.{' '}
          </a>
          <a
            id="00:36:32.002"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2192, '00:36:32.002')}
          >
            Is it that sort of exam?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:36:33.648"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2193, '00:36:33.648')}
          >
            It is. Interesting.{' '}
          </a>
          <a
            id="00:36:35.048"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2195, '00:36:35.048')}
          >
            I don't believe it is a clinically validated tool{' '}
          </a>
          <a
            id="00:36:37.568"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2197, '00:36:37.568')}
          >
            like an ASCVD, which is like a risk of heart attack{' '}
          </a>
          <a
            id="00:36:40.408"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2200, '00:36:40.408')}
          >
            and stroke tool or many other tools.{' '}
          </a>
          <a
            id="00:36:43.868"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2203, '00:36:43.868')}
          >
            There's one for depression, there's one for anxiety.{' '}
          </a>
          <a
            id="00:36:45.928"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2205, '00:36:45.928')}
          >
            They're called PHQ-9 and GAD-7, respectively.{' '}
          </a>
          <a
            id="00:36:49.688"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2209, '00:36:49.688')}
          >
            But anyway, there's often an in the Adam questionnaire{' '}
          </a>
          <a
            id="00:36:54.768"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2214, '00:36:54.768')}
          >
            and what you hear from the patient,{' '}
          </a>
          <a
            id="00:36:59.768"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2219, '00:36:59.768')}
          >
            it's a little bit different.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:37:01.120"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2221, '00:37:01.120')}
          >
            Can you give me an example of some of the questions{' '}
          </a>
          <a
            id="00:37:02.720"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2222, '00:37:02.720')}
          >
            on this Adam questionnaire{' '}
          </a>
          <a
            id="00:37:03.960"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2223, '00:37:03.960')}
          >
            or the sorts of motivational interviewing{' '}
          </a>
          <a
            id="00:37:06.000"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2226, '00:37:06.000')}
          >
            that you might do?{' '}
          </a>
          <a
            id="00:37:06.920"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2226, '00:37:06.920')}
          >
            So say I'm your patient, we sit down,{' '}
          </a>
          <a
            id="00:37:09.239"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2229, '00:37:09.239')}
          >
            what sorts of questions would you ask{' '}
          </a>
          <a
            id="00:37:10.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2230, '00:37:10.480')}
          >
            to probe these kinds of dimensions of hormones?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:37:13.338"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2233, '00:37:13.338')}
          >
            Questions about libido, questions about athletic performance, questions about
            motivation,{' '}
          </a>
          <a
            id="00:37:19.338"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2239, '00:37:19.338')}
          >
            and often the patient will answer one thing, but what you hear from them subjectively is
            far different.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:37:26.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2246, '00:37:26.450')}
          >
            Interesting, can you give me an example of a question?{' '}
          </a>
          <a
            id="00:37:29.250"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2249, '00:37:29.250')}
          >
            I'm happy to be the guinea pig here.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:37:31.394"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2251, '00:37:31.394')}
          >
            A classic one is a guy comes in and a lot of times they say,{' '}
          </a>
          <a
            id="00:37:36.714"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2256, '00:37:36.714')}
          >
            oh no, the wife made me go to the doctor.{' '}
          </a>
          <a
            id="00:37:39.014"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2259, '00:37:39.014')}
          >
            I go, once a year, that's it.{' '}
          </a>
          <a
            id="00:37:40.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2260, '00:37:40.914')}
          >
            I don't want anything.{' '}
          </a>
          <a
            id="00:37:41.754"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2261, '00:37:41.754')}
          >
            I don't want any medications.{' '}
          </a>
          <a
            id="00:37:43.674"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2263, '00:37:43.674')}
          >
            Their screening questionnaires might be zeros{' '}
          </a>
          <a
            id="00:37:46.494"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2266, '00:37:46.494')}
          >
            across the board.{' '}
          </a>
          <a
            id="00:37:47.334"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2267, '00:37:47.334')}
          >
            So nothing, no issues.{' '}
          </a>
          <a
            id="00:37:48.674"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2268, '00:37:48.674')}
          >
            They're apparently in perfect health.{' '}
          </a>
          <a
            id="00:37:50.774"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2270, '00:37:50.774')}
          >
            They talk to you for a while.{' '}
          </a>
          <a
            id="00:37:52.094"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2272, '00:37:52.094')}
          >
            They get some rapport.{' '}
          </a>
          <a
            id="00:37:53.634"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2273, '00:37:53.634')}
          >
            They like you.{' '}
          </a>
          <a
            id="00:37:54.474"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2274, '00:37:54.474')}
          >
            And then right as you're finishing up the visit{' '}
          </a>
          <a
            id="00:37:56.674"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2276, '00:37:56.674')}
          >
            and about to go out the room,{' '}
          </a>
          <a
            id="00:37:58.534"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2278, '00:37:58.534')}
          >
            they mentioned that their libido isn't quite there{' '}
          </a>
          <a
            id="00:38:01.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2281, '00:38:01.914')}
          >
            and they're having a little bit of ED as well.{' '}
          </a>
          <a
            id="00:38:04.034"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2284, '00:38:04.034')}
          >
            And perhaps they're even having{' '}
          </a>
          <a
            id="00:38:05.194"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2285, '00:38:05.194')}
          >
            some chest pressure tightness.{' '}
          </a>
          <a
            id="00:38:07.274"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2287, '00:38:07.274')}
          >
            I see.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:38:07.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2287, '00:38:07.439')}
          >
            So right as you're leaving the room,{' '}
          </a>
          <a
            id="00:38:09.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2289, '00:38:09.759')}
          >
            a patient will tell you that they're having{' '}
          </a>
          <a
            id="00:38:11.199"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2291, '00:38:11.199')}
          >
            some sexual side effects, or not side effects,{' '}
          </a>
          <a
            id="00:38:13.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2293, '00:38:13.759')}
          >
            they're having some sexual challenges,{' '}
          </a>
          <a
            id="00:38:15.519"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2295, '00:38:15.519')}
          >
            and then they'll mention chest pressure.{' '}
          </a>
          <a
            id="00:38:17.959"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2297, '00:38:17.959')}
          >
            Is the chest pressure a sort of general decoy{' '}
          </a>
          <a
            id="00:38:20.199"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2300, '00:38:20.199')}
          >
            for it's got to be my heart,{' '}
          </a>
          <a
            id="00:38:21.679"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2301, '00:38:21.679')}
          >
            or is it related to the other things they're reporting?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:38:24.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2304, '00:38:24.854')}
          >
            It can be related.{' '}
          </a>
          <a
            id="00:38:27.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2307, '00:38:27.854')}
          >
            In fact, erectile dysfunction is known as the canary in the coal mine.{' '}
          </a>
          <a
            id="00:38:30.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2310, '00:38:30.854')}
          >
            So coal miners would take the canary down{' '}
          </a>
          <a
            id="00:38:33.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2313, '00:38:33.854')}
          >
            and the canary would die before the coal miners would have,{' '}
          </a>
          <a
            id="00:38:36.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2316, '00:38:36.854')}
          >
            I believe, carbon monoxide poisoning.{' '}
          </a>
          <a
            id="00:38:39.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2319, '00:38:39.854')}
          >
            And often one of the causes of ED is plaque buildup,{' '}
          </a>
          <a
            id="00:38:42.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2322, '00:38:42.854')}
          >
            which can happen in the coronaries as well,{' '}
          </a>
          <a
            id="00:38:45.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2325, '00:38:45.854')}
          >
            but sometimes they notice the symptom in the genitals{' '}
          </a>
          <a
            id="00:38:48.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2328, '00:38:48.854')}
          >
            in the coronaries.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:38:49.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2329, '00:38:49.829')}
          >
            So for such a patient, um,{' '}
          </a>
          <a
            id="00:38:51.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2331, '00:38:51.749')}
          >
            let's say that patient was a young person where plaque buildup in the arteries{' '}
          </a>
          <a
            id="00:38:55.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2335, '00:38:55.889')}
          >
            and veins is not all that likely if they're, let's say in their twenties or thirties.{' '}
          </a>
          <a
            id="00:39:00.409"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2340, '00:39:00.409')}
          >
            Uh, what would be your next step of the interview at that point? And what,{' '}
          </a>
          <a
            id="00:39:03.649"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2343, '00:39:03.649')}
          >
            what would you consider?{' '}
          </a>
          <a
            id="00:39:04.369"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2344, '00:39:04.369')}
          >
            Would you immediately order labs for that person to try and rule out any kind of,{' '}
          </a>
          <a
            id="00:39:07.849"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2347, '00:39:07.849')}
          >
            um, uh, actual hormone level deficiency?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:39:11.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2351, '00:39:11.412')}
          >
            I certainly would order labs.{' '}
          </a>
          <a
            id="00:39:14.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2354, '00:39:14.412')}
          >
            There are some individuals that are very similar{' '}
          </a>
          <a
            id="00:39:17.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2357, '00:39:17.412')}
          >
            and they come in and they have the same symptoms{' '}
          </a>
          <a
            id="00:39:20.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2360, '00:39:20.412')}
          >
            and one individual might have a very, very high testosterone{' '}
          </a>
          <a
            id="00:39:23.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2363, '00:39:23.412')}
          >
            and one individual might be severely hypogonadal.{' '}
          </a>
          <a
            id="00:39:26.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2366, '00:39:26.412')}
          >
            So there's a big difference between the subjective{' '}
          </a>
          <a
            id="00:39:29.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2369, '00:39:29.412')}
          >
            and what the labs look like.{' '}
          </a>
          <a
            id="00:39:32.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2372, '00:39:32.412')}
          >
            So I certainly order labs.{' '}
          </a>
          <a
            id="00:39:35.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2375, '00:39:35.412')}
          >
            You also ask them about if it's situational or not.{' '}
          </a>
          <a
            id="00:39:38.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2378, '00:39:38.412')}
          >
            You ask them about their habits.{' '}
          </a>
          <a
            id="00:39:41.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2381, '00:39:41.412')}
          >
            You even ask about porn and masturbation and all these issues.{' '}
          </a>
          <a
            id="00:39:44.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2384, '00:39:44.412')}
          >
            And of course that's between the doctor and the patient.{' '}
          </a>
          <a
            id="00:39:47.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2387, '00:39:47.412')}
          >
            And depending on what they tell you,{' '}
          </a>
          <a
            id="00:39:50.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2390, '00:39:50.412')}
          >
            you can often determine if there is a situational component.{' '}
          </a>
          <a
            id="00:39:53.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2393, '00:39:53.412')}
          >
            Some people call it psychogenic ED,{' '}
          </a>
          <a
            id="00:39:56.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2396, '00:39:56.412')}
          >
            but I don't love the term psychogenic ED{' '}
          </a>
          <a
            id="00:39:59.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2399, '00:39:59.412')}
          >
            because it kind of puts some blame on the patient's mind.{' '}
          </a>
          <a
            id="00:40:02.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2402, '00:40:02.412')}
          >
            But a lot of the time that is the case.{' '}
          </a>
          <a
            id="00:40:05.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2405, '00:40:05.412')}
          >
            This is very rarely ordered,{' '}
          </a>
          <a
            id="00:40:08.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2408, '00:40:08.412')}
          >
            it's called penile tumescence.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:40:10.492"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2410, '00:40:10.492')}
          >
            is it true that there are periodic erections during sleep?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:40:14.710"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2414, '00:40:14.710')}
          >
            Correct. Yeah. So you basically put a cuff to see if you're having a normal sized{' '}
          </a>
          <a
            id="00:40:21.230"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2421, '00:40:21.230')}
          >
            erection during sleep. And I believe about 90% of the time they do that test{' '}
          </a>
          <a
            id="00:40:25.710"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2425, '00:40:25.710')}
          >
            they are indeed having erections.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:40:28.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2428, '00:40:28.059')}
          >
            which would point to this psychogenic origin{' '}
          </a>
          <a
            id="00:40:31.339"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2431, '00:40:31.339')}
          >
            of whatever challenges they're having{' '}
          </a>
          <a
            id="00:40:33.459"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2433, '00:40:33.459')}
          >
            in terms of sexual interactions.{' '}
          </a>
          <a
            id="00:40:34.899"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2434, '00:40:34.899')}
          >
            You mentioned porn and masturbation.{' '}
          </a>
          <a
            id="00:40:37.659"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2437, '00:40:37.659')}
          >
            This topic has come up a bunch of times on this podcast{' '}
          </a>
          <a
            id="00:40:40.559"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2440, '00:40:40.559')}
          >
            and on other podcasts I've gone on{' '}
          </a>
          <a
            id="00:40:41.939"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2441, '00:40:41.939')}
          >
            because of the relationship between dopamine,{' '}
          </a>
          <a
            id="00:40:44.599"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2444, '00:40:44.599')}
          >
            sexual motivation and sexual behavior.{' '}
          </a>
          <a
            id="00:40:47.919"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2447, '00:40:47.919')}
          >
            And I've been of the pretty strong stance that,{' '}
          </a>
          <a
            id="00:40:52.179"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2452, '00:40:52.179')}
          >
            while I'm not judging porn or masturbation,{' '}
          </a>
          <a
            id="00:40:54.679"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2454, '00:40:54.679')}
          >
            it can create a brain wiring situation{' '}
          </a>
          <a
            id="00:40:57.799"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2457, '00:40:57.799')}
          >
            where males in particular essentially teach their brain{' '}
          </a>
          <a
            id="00:41:01.859"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2461, '00:41:01.859')}
          >
            to be aroused by watching other people have sex{' '}
          </a>
          <a
            id="00:41:04.539"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2464, '00:41:04.539')}
          >
            as opposed to being the first person actor{' '}
          </a>
          <a
            id="00:41:06.399"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2466, '00:41:06.399')}
          >
            in sexual interactions.{' '}
          </a>
          <a
            id="00:41:09.459"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2469, '00:41:09.459')}
          >
            So in that sense,{' '}
          </a>
          <a
            id="00:41:11.779"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2471, '00:41:11.779')}
          >
            that's more about the brain wiring{' '}
          </a>
          <a
            id="00:41:12.979"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2472, '00:41:12.979')}
          >
            and neuroplasticity and dopamine,{' '}
          </a>
          <a
            id="00:41:14.679"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2474, '00:41:14.679')}
          >
            but what are your thoughts on porn and masturbation{' '}
          </a>
          <a
            id="00:41:17.119"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2477, '00:41:17.119')}
          >
            as they relate to hormones?{' '}
          </a>
          <a
            id="00:41:18.279"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2478, '00:41:18.279')}
          >
            I mean, this is a big debate on the internet.{' '}
          </a>
          <a
            id="00:41:20.079"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2480, '00:41:20.079')}
          >
            In fact, one of the most common debates{' '}
          </a>
          <a
            id="00:41:22.339"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2482, '00:41:22.339')}
          >
            is whether or not masturbation increases{' '}
          </a>
          <a
            id="00:41:24.939"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2484, '00:41:24.939')}
          >
            or decreases testosterone in males.{' '}
          </a>
          <a
            id="00:41:27.259"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2487, '00:41:27.259')}
          >
            Certainly it will decrease motivation{' '}
          </a>
          <a
            id="00:41:29.939"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2489, '00:41:29.939')}
          >
            to go find sexual partners.{' '}
          </a>
          <a
            id="00:41:31.919"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2491, '00:41:31.919')}
          >
            We know this and there are more and more data{' '}
          </a>
          <a
            id="00:41:34.899"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2494, '00:41:34.899')}
          >
            on this all the time.{' '}
          </a>
          <a
            id="00:41:36.339"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2496, '00:41:36.339')}
          >
            In terms of the effects of pornography and masturbation,{' '}
          </a>
          <a
            id="00:41:39.659"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2499, '00:41:39.659')}
          >
            and here I suppose we need to be somewhat specific{' '}
          </a>
          <a
            id="00:41:42.579"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2502, '00:41:42.579')}
          >
            and operationally define what we're talking about.{' '}
          </a>
          <a
            id="00:41:44.219"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2504, '00:41:44.219')}
          >
            We're talking about porn and masturbation{' '}
          </a>
          <a
            id="00:41:46.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2506, '00:41:46.619')}
          >
            to the point of ejaculation.{' '}
          </a>
          <a
            id="00:41:49.579"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2509, '00:41:49.579')}
          >
            Because my understanding is that the ejaculation{' '}
          </a>
          <a
            id="00:41:54.019"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2514, '00:41:54.019')}
          >
            and orgasm associated with it{' '}
          </a>
          <a
            id="00:41:55.739"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2515, '00:41:55.739')}
          >
            causes an increase in prolactin,{' '}
          </a>
          <a
            id="00:41:57.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2517, '00:41:57.059')}
          >
            which blunts libido for some period of time.{' '}
          </a>
          <a
            id="00:41:59.579"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2519, '00:41:59.579')}
          >
            The duration of that will vary from person to person{' '}
          </a>
          <a
            id="00:42:01.899"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2521, '00:42:01.899')}
          >
            and circumstance to circumstance.{' '}
          </a>
          <a
            id="00:42:03.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2523, '00:42:03.619')}
          >
            But basically all of this points to the fact{' '}
          </a>
          <a
            id="00:42:05.818"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2525, '00:42:05.818')}
          >
            that porn and masturbation can really limit libido{' '}
          </a>
          <a
            id="00:42:10.019"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2530, '00:42:10.019')}
          >
            in the real world.{' '}
          </a>
          <a
            id="00:42:11.859"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2531, '00:42:11.859')}
          >
            And to me, pornography and the screen{' '}
          </a>
          <a
            id="00:42:14.598"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2534, '00:42:14.598')}
          >
            is not the real world.{' '}
          </a>
          <a
            id="00:42:16.098"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2536, '00:42:16.098')}
          >
            Screens exist in the real world,{' '}
          </a>
          <a
            id="00:42:17.419"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2537, '00:42:17.419')}
          >
            the real world doesn't exist in the screen.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:42:20.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2540, '00:42:20.075')}
          >
            That's an accurate statement and prolactin does have a significant acute increase after
            ejaculation.{' '}
          </a>
          <a
            id="00:42:29.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2549, '00:42:29.075')}
          >
            It does to some degree after orgasm as well,{' '}
          </a>
          <a
            id="00:42:33.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2553, '00:42:33.075')}
          >
            but prolactin acts on the pituitary to inhibit the release of the hormones LH and FSH{' '}
          </a>
          <a
            id="00:42:39.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2559, '00:42:39.075')}
          >
            of which LH can increase testosterone.{' '}
          </a>
          <a
            id="00:42:42.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2562, '00:42:42.075')}
          >
            So this may be one of the cases where the dose makes the poison{' '}
          </a>
          <a
            id="00:42:46.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2566, '00:42:46.075')}
          >
            and if it is a very frequent habit, certainly daily or more than once a day{' '}
          </a>
          <a
            id="00:42:52.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2572, '00:42:52.075')}
          >
            would be very detrimental from a hormonal component not even taking into account the
            neural wiring.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:42:59.005"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2579, '00:42:59.005')}
          >
            Listen, I think it's terrific that you've actually defined frequency because this is{' '}
          </a>
          <a
            id="00:43:02.765"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2582, '00:43:02.765')}
          >
            the problem on the internet or even in the doctor's office.{' '}
          </a>
          <a
            id="00:43:05.605"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2585, '00:43:05.605')}
          >
            You'll see descriptions about pornography being dangerous for certain things or
            detrimental{' '}
          </a>
          <a
            id="00:43:10.725"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2590, '00:43:10.725')}
          >
            to hormones.{' '}
          </a>
          <a
            id="00:43:11.725"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2591, '00:43:11.725')}
          >
            People say frequent, but what's frequent?{' '}
          </a>
          <a
            id="00:43:12.725"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2592, '00:43:12.725')}
          >
            So you were saying daily or multiple times per day would be potentially detrimental to{' '}
          </a>
          <a
            id="00:43:17.445"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2597, '00:43:17.445')}
          >
            the hormone profile of a male of essentially any age.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:43:20.335"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2600, '00:43:20.335')}
          >
            And that's just for masturbation.{' '}
          </a>
          <a
            id="00:43:22.335"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2602, '00:43:22.335')}
          >
            With pornography, with porn use as well, it would likely be worse.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:43:29.836"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2609, '00:43:29.836')}
          >
            And why is that?{' '}
          </a>
          <a
            id="00:43:31.236"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2611, '00:43:31.236')}
          >
            Just the sort of dopaminergic drive of the stimulus,{' '}
          </a>
          <a
            id="00:43:34.436"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2614, '00:43:34.436')}
          >
            just a really intense visual stimulus.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:43:36.721"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2616, '00:43:36.721')}
          >
            Dopamine sensitivity, I think that using the analogy of a dopamine wave pool,{' '}
          </a>
          <a
            id="00:43:42.721"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2622, '00:43:42.721')}
          >
            it would deepen the pool but not increase your supply of dopamine.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:43:47.521"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2627, '00:43:47.521')}
          >
            Maybe you could describe the dopamine wave pool{' '}
          </a>
          <a
            id="00:43:49.221"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2629, '00:43:49.221')}
          >
            because I think it's such a powerful way{' '}
          </a>
          <a
            id="00:43:50.941"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2630, '00:43:50.941')}
          >
            of thinking about dopamine and what dopamine does.{' '}
          </a>
          <a
            id="00:43:53.021"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2633, '00:43:53.021')}
          >
            In fact, I've always credited you when I've done it,{' '}
          </a>
          <a
            id="00:43:56.541"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2636, '00:43:56.541')}
          >
            but I've generally stolen your analogy{' '}
          </a>
          <a
            id="00:43:59.561"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2639, '00:43:59.561')}
          >
            of the dopamine wave pool because it's so astute.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:44:03.451"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2643, '00:44:03.451')}
          >
            Dopamine wave pool describes the natural variation{' '}
          </a>
          <a
            id="00:44:06.891"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2646, '00:44:06.891')}
          >
            of ups and downs in your dopamine or your motivation.{' '}
          </a>
          <a
            id="00:44:10.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2650, '00:44:10.311')}
          >
            And in the wave pool, depending on how high the peak is,{' '}
          </a>
          <a
            id="00:44:15.931"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2655, '00:44:15.931')}
          >
            you often have a deeper trough.{' '}
          </a>
          <a
            id="00:44:20.171"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2660, '00:44:20.171')}
          >
            So you do not want too high of a peak.{' '}
          </a>
          <a
            id="00:44:22.331"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2662, '00:44:22.331')}
          >
            In addition, if your peak is very, very high,{' '}
          </a>
          <a
            id="00:44:25.611"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2665, '00:44:25.611')}
          >
            for example, when you're using many substances{' '}
          </a>
          <a
            id="00:44:30.051"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2670, '00:44:30.051')}
          >
            like cocaine or like amphetamines,{' '}
          </a>
          <a
            id="00:44:32.531"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2672, '00:44:32.531')}
          >
            your dopamine can go so high,{' '}
          </a>
          <a
            id="00:44:34.371"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2674, '00:44:34.371')}
          >
            you lose almost all the water from the wave pool.{' '}
          </a>
          <a
            id="00:44:37.091"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2677, '00:44:37.091')}
          >
            And then when you crash from that,{' '}
          </a>
          <a
            id="00:44:38.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2678, '00:44:38.311')}
          >
            not only is the trough low,{' '}
          </a>
          <a
            id="00:44:40.011"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2680, '00:44:40.011')}
          >
            you have less dopamine in the pool to begin with.{' '}
          </a>
          <a
            id="00:44:43.451"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2683, '00:44:43.451')}
          >
            The dopamine receptor is extremely sensitive,{' '}
          </a>
          <a
            id="00:44:45.891"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2685, '00:44:45.891')}
          >
            as is the GABA receptor, which is an inhibitory receptor.{' '}
          </a>
          <a
            id="00:44:48.851"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2688, '00:44:48.851')}
          >
            Whereas dopamine is technically a stimulant{' '}
          </a>
          <a
            id="00:44:50.971"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2690, '00:44:50.971')}
          >
            more related to adrenaline and noradrenaline.{' '}
          </a>
          <a
            id="00:44:54.051"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2694, '00:44:54.051')}
          >
            The depth of the pool can change very quick.{' '}
          </a>
          <a
            id="00:44:57.971"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2697, '00:44:57.971')}
          >
            So you wanna have that happy medium{' '}
          </a>
          <a
            id="00:44:59.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2699, '00:44:59.551')}
          >
            where you're fairly near the top,{' '}
          </a>
          <a
            id="00:45:01.431"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2701, '00:45:01.431')}
          >
            but you're not so near the top{' '}
          </a>
          <a
            id="00:45:03.251"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2703, '00:45:03.251')}
          >
            that the depth of the pool is gonna go down.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:45:04.994"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2704, '00:45:04.994')}
          >
            So if I interpret that in the context of this discussion{' '}
          </a>
          <a
            id="00:45:10.514"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2710, '00:45:10.514')}
          >
            about libido, sex, porn, and masturbation,{' '}
          </a>
          <a
            id="00:45:14.854"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2714, '00:45:14.854')}
          >
            if somebody has a very intense sexual experience,{' '}
          </a>
          <a
            id="00:45:18.194"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2718, '00:45:18.194')}
          >
            and here we're not necessarily talking{' '}
          </a>
          <a
            id="00:45:19.714"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2719, '00:45:19.714')}
          >
            about an intense orgasm,{' '}
          </a>
          <a
            id="00:45:21.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2721, '00:45:21.914')}
          >
            we're talking about just a lot of intense visual,{' '}
          </a>
          <a
            id="00:45:24.714"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2724, '00:45:24.714')}
          >
            so a lot of intense imagery or auditory input or both,{' '}
          </a>
          <a
            id="00:45:30.194"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2730, '00:45:30.194')}
          >
            that is going to lead to a situation{' '}
          </a>
          <a
            id="00:45:32.194"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2732, '00:45:32.194')}
          >
            where dopamine is going to be depleted afterwards.{' '}
          </a>
          <a
            id="00:45:35.194"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2735, '00:45:35.194')}
          >
            A guest on this podcast before,{' '}
          </a>
          <a
            id="00:45:36.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2736, '00:45:36.914')}
          >
            my colleague at Stanford, Dr. Ana Lemke,{' '}
          </a>
          <a
            id="00:45:38.714"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2738, '00:45:38.714')}
          >
            who's an expert in addiction,{' '}
          </a>
          <a
            id="00:45:39.594"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2739, '00:45:39.594')}
          >
            talked a bit about this as sort of a seesawing.{' '}
          </a>
          <a
            id="00:45:41.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2741, '00:45:41.914')}
          >
            Here we're talking about a wave{' '}
          </a>
          <a
            id="00:45:42.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2742, '00:45:42.914')}
          >
            and a crashing out of the water from the wave pool there.{' '}
          </a>
          <a
            id="00:45:45.114"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2745, '00:45:45.114')}
          >
            It was a seesawing from pleasure and pain.{' '}
          </a>
          <a
            id="00:45:47.914"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2747, '00:45:47.914')}
          >
            There's gonna be a longer and deeper period{' '}
          </a>
          <a
            id="00:45:51.034"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2751, '00:45:51.034')}
          >
            of lack of pleasure following that.{' '}
          </a>
          <a
            id="00:45:53.474"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2753, '00:45:53.474')}
          >
            And I think a lot of people think,{' '}
          </a>
          <a
            id="00:45:54.554"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2754, '00:45:54.554')}
          >
            oh, well, that's great.{' '}
          </a>
          <a
            id="00:45:55.394"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2755, '00:45:55.394')}
          >
            You know, they want the intense experience.{' '}
          </a>
          <a
            id="00:45:57.234"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2757, '00:45:57.234')}
          >
            But if that intense experience is coming{' '}
          </a>
          <a
            id="00:45:58.834"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2758, '00:45:58.834')}
          >
            from pornography and masturbation,{' '}
          </a>
          <a
            id="00:46:01.274"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2761, '00:46:01.274')}
          >
            or I suppose coming from high-adrenaline activities{' '}
          </a>
          <a
            id="00:46:03.994"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2763, '00:46:03.994')}
          >
            like life-risking parkour,{' '}
          </a>
          <a
            id="00:46:07.234"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2767, '00:46:07.234')}
          >
            hanging off the side of a building,{' '}
          </a>
          <a
            id="00:46:09.074"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2769, '00:46:09.074')}
          >
            it inevitably is going to lead to depressive episodes,{' '}
          </a>
          <a
            id="00:46:12.094"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2772, '00:46:12.094')}
          >
            low-libido episodes that follow.{' '}
          </a>
          <a
            id="00:46:13.794"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2773, '00:46:13.794')}
          >
            Is that right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:46:14.215"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2774, '00:46:14.215')}
          >
            Correct, in a similar physiologic way to withdrawal from stimulants like amphetamines.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:46:21.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2781, '00:46:21.759')}
          >
            Now is sex with a partner different?{' '}
          </a>
          <a
            id="00:46:25.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2785, '00:46:25.439')}
          >
            Because there are many people who are chasing{' '}
          </a>
          <a
            id="00:46:28.399"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2788, '00:46:28.399')}
          >
            more and more intense experiences with a partner{' '}
          </a>
          <a
            id="00:46:31.079"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2791, '00:46:31.079')}
          >
            as opposed to through pornography and masturbation.{' '}
          </a>
          <a
            id="00:46:33.159"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2793, '00:46:33.159')}
          >
            Again, here we're talking about all ages{' '}
          </a>
          <a
            id="00:46:34.479"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2794, '00:46:34.479')}
          >
            and I should always say,{' '}
          </a>
          <a
            id="00:46:35.319"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2795, '00:46:35.319')}
          >
            anytime we're talking about sex with a partner,{' '}
          </a>
          <a
            id="00:46:37.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2797, '00:46:37.619')}
          >
            we're talking, you know, the four conditions{' '}
          </a>
          <a
            id="00:46:40.039"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2800, '00:46:40.039')}
          >
            that I always lay out on the Human Lab podcast{' '}
          </a>
          <a
            id="00:46:43.159"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2803, '00:46:43.159')}
          >
            are that we're talking about consensual,{' '}
          </a>
          <a
            id="00:46:44.919"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2804, '00:46:44.919')}
          >
            age appropriate, context appropriate,{' '}
          </a>
          <a
            id="00:46:46.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2806, '00:46:46.719')}
          >
            species appropriate interactions.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:46:48.995"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2808, '00:46:48.995')}
          >
            Yeah, and this is also a case where the dose makes the poison.{' '}
          </a>
          <a
            id="00:46:53.995"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2813, '00:46:53.995')}
          >
            So if there's, you know, obviously meeting all those criteria,{' '}
          </a>
          <a
            id="00:46:59.235"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2819, '00:46:59.235')}
          >
            if they have one preference,{' '}
          </a>
          <a
            id="00:47:02.835"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2822, '00:47:02.835')}
          >
            that for both of them is a positive experience,{' '}
          </a>
          <a
            id="00:47:06.675"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2826, '00:47:06.675')}
          >
            then that is likely okay.{' '}
          </a>
          <a
            id="00:47:09.915"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2829, '00:47:09.915')}
          >
            You're not gonna be able to maintain dopamine{' '}
          </a>
          <a
            id="00:47:12.475"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2832, '00:47:12.475')}
          >
            over a certain threshold for a long period of time.{' '}
          </a>
          <a
            id="00:47:15.875"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2835, '00:47:15.875')}
          >
            So there very well may be a crash{' '}
          </a>
          <a
            id="00:47:17.715"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2837, '00:47:17.715')}
          >
            from that experience as well.{' '}
          </a>
          <a
            id="00:47:19.395"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2839, '00:47:19.395')}
          >
            And the crash may be different{' '}
          </a>
          <a
            id="00:47:21.595"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2841, '00:47:21.595')}
          >
            in one partner than the other.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:47:23.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2843, '00:47:23.673')}
          >
            Interesting.{' '}
          </a>
          <a
            id="00:47:24.993"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2844, '00:47:24.993')}
          >
            Oh, I'll draw an analogy to food.{' '}
          </a>
          <a
            id="00:47:26.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2846, '00:47:26.553')}
          >
            It'd be like, you know,{' '}
          </a>
          <a
            id="00:47:27.393"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2847, '00:47:27.393')}
          >
            you don't have to serve the banquet meal{' '}
          </a>
          <a
            id="00:47:28.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2848, '00:47:28.673')}
          >
            seven nights of the week, maybe just two.{' '}
          </a>
          <a
            id="00:47:31.353"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2851, '00:47:31.353')}
          >
            Is that right?{' '}
          </a>
          <a
            id="00:47:32.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2852, '00:47:32.193')}
          >
            And there are other delicious foods out there.{' '}
          </a>
          <a
            id="00:47:34.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2854, '00:47:34.193')}
          >
            Can we use that analogy?{' '}
          </a>
          <a
            id="00:47:35.393"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2855, '00:47:35.393')}
          >
            That is very reasonable.{' '}
          </a>
          <a
            id="00:47:36.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2856, '00:47:36.633')}
          >
            Okay, not trying to be PG-13,{' '}
          </a>
          <a
            id="00:47:38.073"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2858, '00:47:38.073')}
          >
            just trying to parsimony, Occam's razor,{' '}
          </a>
          <a
            id="00:47:41.993"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2861, '00:47:41.993')}
          >
            the ability to describe a lot of things in a few words.{' '}
          </a>
          <a
            id="00:47:46.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2866, '00:47:46.273')}
          >
            I'd like to return to the key things that people should do,{' '}
          </a>
          <a
            id="00:47:50.513"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2870, '00:47:50.513')}
          >
            or I should say the key things that men should do{' '}
          </a>
          <a
            id="00:47:52.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2872, '00:47:52.633')}
          >
            to optimize their hormones.{' '}
          </a>
          <a
            id="00:47:53.713"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2873, '00:47:53.713')}
          >
            So we talked about getting some movement,{' '}
          </a>
          <a
            id="00:47:55.073"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2875, '00:47:55.073')}
          >
            getting some sunlight,{' '}
          </a>
          <a
            id="00:47:56.173"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2876, '00:47:56.173')}
          >
            getting quality social connection one way or the other,{' '}
          </a>
          <a
            id="00:47:58.953"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2878, '00:47:58.953')}
          >
            avoid excessively frequent masturbation{' '}
          </a>
          <a
            id="00:48:01.793"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2881, '00:48:01.793')}
          >
            and viewing pornography.{' '}
          </a>
          <a
            id="00:48:03.033"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2883, '00:48:03.033')}
          >
            And for some people, zero might be the optimal number.{' '}
          </a>
          <a
            id="00:48:07.293"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2887, '00:48:07.293')}
          >
            And I keep coming back to this-{' '}
          </a>
          <a
            id="00:48:08.133"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2888, '00:48:08.133')}
          >
            For most people.{' '}
          </a>
          <a
            id="00:48:09.033"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2889, '00:48:09.033')}
          >
            For most people, interesting.{' '}
          </a>
          <a
            id="00:48:10.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2890, '00:48:10.673')}
          >
            I feel so fortunate to have grown up{' '}
          </a>
          <a
            id="00:48:12.353"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2892, '00:48:12.353')}
          >
            prior to the availability of internet pornography.{' '}
          </a>
          <a
            id="00:48:14.713"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2894, '00:48:14.713')}
          >
            I've never been a big consumer of pornography.{' '}
          </a>
          <a
            id="00:48:16.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2896, '00:48:16.673')}
          >
            It just not been my thing,{' '}
          </a>
          <a
            id="00:48:18.233"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2898, '00:48:18.233')}
          >
            but I hear so often from males of all ages{' '}
          </a>
          <a
            id="00:48:21.753"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2901, '00:48:21.753')}
          >
            about their addiction to it, their affliction by it.{' '}
          </a>
          <a
            id="00:48:24.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2904, '00:48:24.673')}
          >
            It's really a serious issue.{' '}
          </a>
          <a
            id="00:48:26.793"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2906, '00:48:26.793')}
          >
            And that's one of the reasons why I'm grateful{' '}
          </a>
          <a
            id="00:48:28.353"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2908, '00:48:28.353')}
          >
            that you're willing to talk about this{' '}
          </a>
          <a
            id="00:48:29.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2909, '00:48:29.593')}
          >
            and your clinical experience with these patients.{' '}
          </a>
          <a
            id="00:48:32.153"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2912, '00:48:32.153')}
          >
            I'd like to take a quick break{' '}
          </a>
          <a
            id="00:48:33.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2913, '00:48:33.673')}
          >
            and acknowledge one of our sponsors, Athletic Greens.{' '}
          </a>
          <a
            id="00:48:36.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2916, '00:48:36.593')}
          >
            Athletic Greens, now called AG1,{' '}
          </a>
          <a
            id="00:48:39.053"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2919, '00:48:39.053')}
          >
            is a vitamin mineral probiotic drink{' '}
          </a>
          <a
            id="00:48:41.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2921, '00:48:41.433')}
          >
            that covers all of your foundational nutritional needs.{' '}
          </a>
          <a
            id="00:48:44.313"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2924, '00:48:44.313')}
          >
            I've been taking Athletic Greens since 2012,{' '}
          </a>
          <a
            id="00:48:47.013"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2927, '00:48:47.013')}
          >
            so I'm delighted that they're sponsoring the podcast.{' '}
          </a>
          <a
            id="00:48:49.233"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2929, '00:48:49.233')}
          >
            The reason I started taking Athletic Greens{' '}
          </a>
          <a
            id="00:48:50.833"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2930, '00:48:50.833')}
          >
            and the reason I still take Athletic Greens{' '}
          </a>
          <a
            id="00:48:52.893"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2932, '00:48:52.893')}
          >
            once or usually twice a day{' '}
          </a>
          <a
            id="00:48:54.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2934, '00:48:54.873')}
          >
            is that it gets me the probiotics that I need for gut health.{' '}
          </a>
          <a
            id="00:48:58.473"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2938, '00:48:58.473')}
          >
            Our gut is very important.{' '}
          </a>
          <a
            id="00:48:59.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2939, '00:48:59.593')}
          >
            It's populated by gut microbiota{' '}
          </a>
          <a
            id="00:49:02.133"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2942, '00:49:02.133')}
          >
            that communicate with the brain, the immune system,{' '}
          </a>
          <a
            id="00:49:03.893"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2943, '00:49:03.893')}
          >
            and basically all the biological systems of our body{' '}
          </a>
          <a
            id="00:49:06.293"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2946, '00:49:06.293')}
          >
            to strongly impact our immediate and long-term health.{' '}
          </a>
          <a
            id="00:49:09.953"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2949, '00:49:09.953')}
          >
            And those probiotics in Athletic Greens{' '}
          </a>
          <a
            id="00:49:11.793"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2951, '00:49:11.793')}
          >
            are optimal and vital for microbiotic health.{' '}
          </a>
          <a
            id="00:49:15.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2955, '00:49:15.633')}
          >
            In addition, Athletic Greens contains a number{' '}
          </a>
          <a
            id="00:49:17.473"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2957, '00:49:17.473')}
          >
            of adaptogens, vitamins, and minerals{' '}
          </a>
          <a
            id="00:49:19.113"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2959, '00:49:19.113')}
          >
            that make sure that all of my foundational{' '}
          </a>
          <a
            id="00:49:20.973"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2960, '00:49:20.973')}
          >
            and nutritional needs are met, and it tastes great.{' '}
          </a>
          <a
            id="00:49:24.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2964, '00:49:24.433')}
          >
            If you'd like to try Athletic Greens,{' '}
          </a>
          <a
            id="00:49:25.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2965, '00:49:25.873')}
          >
            you can go to athleticgreens.com slash Huberman,{' '}
          </a>
          <a
            id="00:49:29.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2969, '00:49:29.273')}
          >
            and they'll give you five free travel packs{' '}
          </a>
          <a
            id="00:49:31.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2971, '00:49:31.273')}
          >
            that make it really easy to mix up Athletic Greens{' '}
          </a>
          <a
            id="00:49:33.573"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2973, '00:49:33.573')}
          >
            while you're on the road, in the car, on the plane, et cetera,{' '}
          </a>
          <a
            id="00:49:36.153"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2976, '00:49:36.153')}
          >
            and they'll give you a year's supply of vitamin D3K2.{' '}
          </a>
          <a
            id="00:49:39.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2979, '00:49:39.553')}
          >
            Again, that's athleticgreens.com slash Huberman{' '}
          </a>
          <a
            id="00:49:42.252"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2982, '00:49:42.252')}
          >
            to get the five free travel packs{' '}
          </a>
          <a
            id="00:49:43.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2983, '00:49:43.633')}
          >
            and the year's supply of vitamin D3K2.{' '}
          </a>
          <a
            id="00:49:46.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2986, '00:49:46.673')}
          >
            In terms of exercise, you know, here's, again,{' '}
          </a>
          <a
            id="00:49:48.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2988, '00:49:48.433')}
          >
            it's a double-edged sword.{' '}
          </a>
          <a
            id="00:49:50.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2990, '00:49:50.273')}
          >
            On the one hand, it's great to get exercise,{' '}
          </a>
          <a
            id="00:49:51.913"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2991, '00:49:51.913')}
          >
            but I'm familiar with, you know, if I train an hour a day,{' '}
          </a>
          <a
            id="00:49:56.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2996, '00:49:56.673')}
          >
            you know, 10 minutes of warmup{' '}
          </a>
          <a
            id="00:49:57.713"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2997, '00:49:57.713')}
          >
            and 50 minutes to an hour of weight training{' '}
          </a>
          <a
            id="00:49:59.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2999, '00:49:59.873')}
          >
            or 50 minutes to an hour of cardio, I feel great,{' '}
          </a>
          <a
            id="00:50:02.313"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3002, '00:50:02.313')}
          >
            especially if once a week I take a complete day off.{' '}
          </a>
          <a
            id="00:50:04.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3004, '00:50:04.553')}
          >
            That's sort of my general schedule.{' '}
          </a>
          <a
            id="00:50:06.113"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3006, '00:50:06.113')}
          >
            I'm also familiar with when I go out{' '}
          </a>
          <a
            id="00:50:08.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3008, '00:50:08.593')}
          >
            for runs that are excessively long, two-hour runs,{' '}
          </a>
          <a
            id="00:50:11.353"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3011, '00:50:11.353')}
          >
            or I spend 90 minutes in the gym too frequently,{' '}
          </a>
          <a
            id="00:50:14.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3014, '00:50:14.433')}
          >
            I start to feel like garbage.{' '}
          </a>
          <a
            id="00:50:15.733"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3015, '00:50:15.733')}
          >
            Everything suffers.{' '}
          </a>
          <a
            id="00:50:16.573"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3016, '00:50:16.573')}
          >
            My sleep starts to suffer.{' '}
          </a>
          <a
            id="00:50:17.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3017, '00:50:17.633')}
          >
            It doesn't matter how much I eat.{' '}
          </a>
          <a
            id="00:50:19.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3019, '00:50:19.273')}
          >
            I don't seem to recover.{' '}
          </a>
          <a
            id="00:50:20.453"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3020, '00:50:20.453')}
          >
            I don't feel well.{' '}
          </a>
          <a
            id="00:50:21.752"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3021, '00:50:21.752')}
          >
            So I realized that recovery ability varies{' '}
          </a>
          <a
            id="00:50:24.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3024, '00:50:24.193')}
          >
            between individuals, but what do you think is a healthy,{' '}
          </a>
          <a
            id="00:50:27.513"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3027, '00:50:27.513')}
          >
            sustainable exercise regimen that anyone can follow{' '}
          </a>
          <a
            id="00:50:32.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3032, '00:50:32.193')}
          >
            that will also support their hormone status?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:47:34.321"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2854, '00:47:34.321')}
          >
            Yes.{' '}
          </a>
          <a
            id="00:47:35.321"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2855, '00:47:35.321')}
          >
            We use that analogy.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:48:07.615"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(2887, '00:48:07.615')}
          >
            Keep coming back to this.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:50:35.626"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3035, '00:50:35.626')}
          >
            For really vigorous exercise,{' '}
          </a>
          <a
            id="00:50:37.826"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3037, '00:50:37.826')}
          >
            around three to four times a week{' '}
          </a>
          <a
            id="00:50:39.746"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3039, '00:50:39.746')}
          >
            is very sustainable over a long period of time.{' '}
          </a>
          <a
            id="00:50:42.986"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3042, '00:50:42.986')}
          >
            On top of that, you could add in three or four more{' '}
          </a>
          <a
            id="00:50:46.246"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3046, '00:50:46.246')}
          >
            instances of less vigorous exercise.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:50:48.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3048, '00:50:48.940')}
          >
            Okay. So for less vigorous, what do you mean that, you know,{' '}
          </a>
          <a
            id="00:50:50.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3050, '00:50:50.980')}
          >
            zone two cardio where you can hold a conversation,{' '}
          </a>
          <a
            id="00:50:53.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3053, '00:50:53.460')}
          >
            but beyond which you, you can't.{' '}
          </a>
          <a
            id="00:50:55.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3055, '00:50:55.300')}
          >
            And for more vigorous, you're,{' '}
          </a>
          <a
            id="00:50:56.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3056, '00:50:56.540')}
          >
            you're thinking weight training or hit a high intensity{' '}
          </a>
          <a
            id="00:50:59.340"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3059, '00:50:59.340')}
          >
            interval type training?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:51:00.027"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3060, '00:51:00.027')}
          >
            Is that right?{' '}
          </a>
          <a
            id="00:51:01.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3061, '00:51:01.167')}
          >
            Correct.{' '}
          </a>
          <a
            id="00:51:02.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3062, '00:51:02.167')}
          >
            You can also weight train and have some benefit{' '}
          </a>
          <a
            id="00:51:05.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3065, '00:51:05.607')}
          >
            even at a low to moderate intensity.{' '}
          </a>
          <a
            id="00:51:08.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3068, '00:51:08.327')}
          >
            If you think about weight training where you have,{' '}
          </a>
          <a
            id="00:51:11.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3071, '00:51:11.567')}
          >
            and it's not necessarily related to the incidence of DOMS,{' '}
          </a>
          <a
            id="00:51:14.247"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3074, '00:51:14.247')}
          >
            which is delayed onset muscle soreness,{' '}
          </a>
          <a
            id="00:51:16.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3076, '00:51:16.767')}
          >
            but if you weight train lazy or easy from time to time,{' '}
          </a>
          <a
            id="00:51:20.847"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3080, '00:51:20.847')}
          >
            obviously you wanna weight train very heavy{' '}
          </a>
          <a
            id="00:51:22.647"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3082, '00:51:22.647')}
          >
            from time to time as well{' '}
          </a>
          <a
            id="00:51:23.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3083, '00:51:23.567')}
          >
            because of more lean body mass growth.{' '}
          </a>
          <a
            id="00:51:26.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3086, '00:51:26.927')}
          >
            But if you weight train lighter,{' '}
          </a>
          <a
            id="00:51:29.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3089, '00:51:29.527')}
          >
            you're going to be able to do it more often.{' '}
          </a>
          <a
            id="00:51:32.326"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3092, '00:51:32.326')}
          >
            And it can still help with the hypertrophy of collagen,{' '}
          </a>
          <a
            id="00:51:37.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3097, '00:51:37.327')}
          >
            for example, in tendons and ligaments.{' '}
          </a>
          <a
            id="00:51:39.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3099, '00:51:39.927')}
          >
            00.06.51{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:51:39.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3099, '00:51:39.937')}
          >
            So here again, like to perhaps drill into this notion{' '}
          </a>
          <a
            id="00:51:43.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3103, '00:51:43.897')}
          >
            of intensity and lightweights, because for me,{' '}
          </a>
          <a
            id="00:51:46.177"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3106, '00:51:46.177')}
          >
            some of the most brutal workouts I've ever done{' '}
          </a>
          <a
            id="00:51:48.097"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3108, '00:51:48.097')}
          >
            were in what I would consider a high repetition range,{' '}
          </a>
          <a
            id="00:51:50.817"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3110, '00:51:50.817')}
          >
            15 to 50.{' '}
          </a>
          <a
            id="00:51:51.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3111, '00:51:51.697')}
          >
            Actually, I went up to Oregon{' '}
          </a>
          <a
            id="00:51:52.977"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3112, '00:51:52.977')}
          >
            to watch the International Track and Field Championships.{' '}
          </a>
          <a
            id="00:51:55.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3115, '00:51:55.377')}
          >
            We went by Cameron Haynes' place, right?{' '}
          </a>
          <a
            id="00:51:59.417"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3119, '00:51:59.417')}
          >
            The Cameron Haynes.{' '}
          </a>
          <a
            id="00:52:00.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3120, '00:52:00.697')}
          >
            And he and his trainer put us through a workout{' '}
          </a>
          <a
            id="00:52:03.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3123, '00:52:03.537')}
          >
            that was 25 to 50 repetitions per set,{' '}
          </a>
          <a
            id="00:52:06.737"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3126, '00:52:06.737')}
          >
            and it was done in circuit, and it was brutal.{' '}
          </a>
          <a
            id="00:52:08.577"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3128, '00:52:08.577')}
          >
            So it was light.{' '}
          </a>
          <a
            id="00:52:09.737"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3129, '00:52:09.737')}
          >
            I mean, those weights were nothing.{' '}
          </a>
          <a
            id="00:52:12.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3132, '00:52:12.017')}
          >
            In some cases, it was body weight,{' '}
          </a>
          <a
            id="00:52:13.677"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3133, '00:52:13.677')}
          >
            but the number of repetitions was brutal.{' '}
          </a>
          <a
            id="00:52:15.737"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3135, '00:52:15.737')}
          >
            So when you say limiting intensity,{' '}
          </a>
          <a
            id="00:52:17.857"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3137, '00:52:17.857')}
          >
            are you talking about limiting the number of sets to failure?{' '}
          </a>
          <a
            id="00:52:21.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3141, '00:52:21.217')}
          >
            Are you talking about really being{' '}
          </a>
          <a
            id="00:52:23.577"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3143, '00:52:23.577')}
          >
            kind of a lazy bear in the gym?{' '}
          </a>
          <a
            id="00:52:25.457"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3145, '00:52:25.457')}
          >
            I like to do that every once in a long rest,{' '}
          </a>
          <a
            id="00:52:27.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3147, '00:52:27.657')}
          >
            that sort of thing.{' '}
          </a>
          <a
            id="00:52:29.257"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3149, '00:52:29.257')}
          >
            What are your thoughts on that{' '}
          </a>
          <a
            id="00:52:30.617"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3150, '00:52:30.617')}
          >
            as it relates to hormone optimization?{' '}
          </a>
          <a
            id="00:52:32.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3152, '00:52:32.497')}
          >
            So I'll just mention, and then I'll let you answer.{' '}
          </a>
          <a
            id="00:52:35.137"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3155, '00:52:35.137')}
          >
            I feel best overall when I'm training for 10-minute warmups{' '}
          </a>
          <a
            id="00:52:39.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3159, '00:52:39.217')}
          >
            and about 45 or 50 minutes of weight training,{' '}
          </a>
          <a
            id="00:52:41.617"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3161, '00:52:41.617')}
          >
            where I'm pretty lazy between sets.{' '}
          </a>
          <a
            id="00:52:43.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3163, '00:52:43.537')}
          >
            Two to three-minute rest,{' '}
          </a>
          <a
            id="00:52:45.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3165, '00:52:45.537')}
          >
            training somewhere in the six to 10 rep range,{' '}
          </a>
          <a
            id="00:52:48.177"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3168, '00:52:48.177')}
          >
            going to failure every once in a while,{' '}
          </a>
          <a
            id="00:52:49.817"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3169, '00:52:49.817')}
          >
            but mostly getting that sort of last rep{' '}
          </a>
          <a
            id="00:52:51.617"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3171, '00:52:51.617')}
          >
            before what I would think is failure.{' '}
          </a>
          <a
            id="00:52:52.976"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3172, '00:52:52.976')}
          >
            No forced reps, that kind of thing.{' '}
          </a>
          <a
            id="00:52:54.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3174, '00:52:54.697')}
          >
            And then jogging on the other days, nice and easy.{' '}
          </a>
          <a
            id="00:52:56.837"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3176, '00:52:56.837')}
          >
            When I do that, I feel fantastic{' '}
          </a>
          <a
            id="00:52:58.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3178, '00:52:58.897')}
          >
            in all other dimensions of life.{' '}
          </a>
          <a
            id="00:53:01.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3181, '00:53:01.537')}
          >
            When I train more intensely than that,{' '}
          </a>
          <a
            id="00:53:03.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3183, '00:53:03.697')}
          >
            even with lightweight, so faster cadence and lower rest,{' '}
          </a>
          <a
            id="00:53:08.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3188, '00:53:08.697')}
          >
            I feel like garbage.{' '}
          </a>
          <a
            id="00:53:10.057"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3190, '00:53:10.057')}
          >
            I get a headache, I'm kind of ornery, everything suffers.{' '}
          </a>
          <a
            id="00:53:14.337"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3194, '00:53:14.337')}
          >
            So what are your thoughts on kind of defining{' '}
          </a>
          <a
            id="00:53:16.696"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3196, '00:53:16.696')}
          >
            a optimal exercise strategy for hormones?{' '}
          </a>
          <a
            id="00:53:19.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3199, '00:53:19.957')}
          >
            I've never measured my hormones{' '}
          </a>
          <a
            id="00:53:21.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3201, '00:53:21.017')}
          >
            in those two different contexts,{' '}
          </a>
          <a
            id="00:53:21.976"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3201, '00:53:21.976')}
          >
            but I have to imagine that it's cortisol-related.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:53:24.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3204, '00:53:24.781')}
          >
            When they study the effect of exercise,{' '}
          </a>
          <a
            id="00:53:27.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3207, '00:53:27.781')}
          >
            specifically vigorous exercise,{' '}
          </a>
          <a
            id="00:53:29.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3209, '00:53:29.781')}
          >
            one area that's been studied is vigorous exercise episodes{' '}
          </a>
          <a
            id="00:53:33.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3213, '00:53:33.781')}
          >
            lasting longer than an hour.{' '}
          </a>
          <a
            id="00:53:36.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3216, '00:53:36.781')}
          >
            They usually track it by a rating of perceived exertion,{' '}
          </a>
          <a
            id="00:53:39.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3219, '00:53:39.781')}
          >
            which isn't perfect and it's not extremely actionable,{' '}
          </a>
          <a
            id="00:53:42.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3222, '00:53:42.781')}
          >
            but it's helpful for clinical science.{' '}
          </a>
          <a
            id="00:53:44.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3224, '00:53:44.781')}
          >
            But the takeaway from that is basically{' '}
          </a>
          <a
            id="00:53:47.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3227, '00:53:47.781')}
          >
            it is not hormonally helpful to train,{' '}
          </a>
          <a
            id="00:53:52.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3232, '00:53:52.781')}
          >
            especially regularly train,{' '}
          </a>
          <a
            id="00:53:54.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3234, '00:53:54.781')}
          >
            vigorously for longer than an hour.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:53:57.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3237, '00:53:57.789')}
          >
            Great, so I'm happy to hear that{' '}
          </a>
          <a
            id="00:53:59.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3239, '00:53:59.709')}
          >
            because it sounds like for most people{' '}
          </a>
          <a
            id="00:54:01.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3241, '00:54:01.109')}
          >
            that hours of work is really the threshold.{' '}
          </a>
          <a
            id="00:54:04.829"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3244, '00:54:04.829')}
          >
            I think this is important for people to hear,{' '}
          </a>
          <a
            id="00:54:06.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3246, '00:54:06.549')}
          >
            especially males, because I think{' '}
          </a>
          <a
            id="00:54:08.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3248, '00:54:08.949')}
          >
            with all of the incredible examples out there{' '}
          </a>
          <a
            id="00:54:11.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3251, '00:54:11.149')}
          >
            of people like Cam, like David Goggins,{' '}
          </a>
          <a
            id="00:54:13.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3253, '00:54:13.629')}
          >
            people who are training for very long periods of time,{' '}
          </a>
          <a
            id="00:54:16.309"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3256, '00:54:16.309')}
          >
            you know, and leaving aside all issues{' '}
          </a>
          <a
            id="00:54:18.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3258, '00:54:18.989')}
          >
            of what people are doing in order to optimize their recovery,{' '}
          </a>
          <a
            id="00:54:21.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3261, '00:54:21.909')}
          >
            I think an hour a day of exercise is just a great program,{' '}
          </a>
          <a
            id="00:54:25.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3265, '00:54:25.989')}
          >
            that most anyone can follow.{' '}
          </a>
          <a
            id="00:54:29.149"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3269, '00:54:29.149')}
          >
            And beyond an hour, you start running into challenges.{' '}
          </a>
          <a
            id="00:54:33.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3273, '00:54:33.229')}
          >
            And I, you know, the occasional 90 minute{' '}
          </a>
          <a
            id="00:54:35.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3275, '00:54:35.349')}
          >
            or two hour workout is no big deal.{' '}
          </a>
          <a
            id="00:54:37.709"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3277, '00:54:37.709')}
          >
            But if you start doing that more than once every two months,{' '}
          </a>
          <a
            id="00:54:41.869"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3281, '00:54:41.869')}
          >
            I think you're headed for trouble.{' '}
          </a>
          <a
            id="00:54:42.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3282, '00:54:42.949')}
          >
            Have you seen that in people's blood work{' '}
          </a>
          <a
            id="00:54:44.989"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3284, '00:54:44.989')}
          >
            and in their hormones?{' '}
          </a>
          <a
            id="00:54:46.229"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3286, '00:54:46.229')}
          >
            Do you ever see people that are just badly over-trained{' '}
          </a>
          <a
            id="00:54:48.569"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3288, '00:54:48.569')}
          >
            because they're just training too hard and too often?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:54:50.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3290, '00:54:50.844')}
          >
            Yes, when the blood work is particularly bad,{' '}
          </a>
          <a
            id="00:54:55.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3295, '00:54:55.044')}
          >
            they're often in a large caloric deficit as well.{' '}
          </a>
          <a
            id="00:54:59.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3299, '00:54:59.044')}
          >
            There's a synergistic effect between a caloric deficit,{' '}
          </a>
          <a
            id="00:55:03.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3303, '00:55:03.044')}
          >
            even if you're maintaining adequate protein intake,{' '}
          </a>
          <a
            id="00:55:06.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3306, '00:55:06.044')}
          >
            you might not be maintaining adequate iron intake or adequate vitamin D,{' '}
          </a>
          <a
            id="00:55:11.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3311, '00:55:11.044')}
          >
            and you're also just literally in a caloric deficit,{' '}
          </a>
          <a
            id="00:55:14.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3314, '00:55:14.044')}
          >
            perhaps low carbs as well, very low free testosterone,{' '}
          </a>
          <a
            id="00:55:18.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3318, '00:55:18.044')}
          >
            and they're simultaneously doing a lot of vigorous exercise.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:55:23.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3323, '00:55:23.007')}
          >
            Interesting.{' '}
          </a>
          <a
            id="00:55:24.187"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3324, '00:55:24.187')}
          >
            I often hear, and I'm starting to wonder whether or not{' '}
          </a>
          <a
            id="00:55:27.087"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3327, '00:55:27.087')}
          >
            some of the quicker-to-results nutrition tactics,{' '}
          </a>
          <a
            id="00:55:33.827"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3333, '00:55:33.827')}
          >
            things like dropping all carbohydrates{' '}
          </a>
          <a
            id="00:55:36.247"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3336, '00:55:36.247')}
          >
            or the quicker-to-results exercise habits,{' '}
          </a>
          <a
            id="00:55:39.827"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3339, '00:55:39.827')}
          >
            like starting to do six-day-a-week really intense workouts,{' '}
          </a>
          <a
            id="00:55:43.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3343, '00:55:43.007')}
          >
            whether or not in the short run they work{' '}
          </a>
          <a
            id="00:55:45.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3345, '00:55:45.167')}
          >
            because they cause the cosmetic changes{' '}
          </a>
          <a
            id="00:55:46.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3346, '00:55:46.927')}
          >
            that people are seeking,{' '}
          </a>
          <a
            id="00:55:48.147"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3348, '00:55:48.147')}
          >
            but that they really undermine the overall goal,{' '}
          </a>
          <a
            id="00:55:50.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3350, '00:55:50.927')}
          >
            which is, at least to me, to have your hormones{' '}
          </a>
          <a
            id="00:55:54.847"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3354, '00:55:54.847')}
          >
            maybe not optimized to the 100%,{' '}
          </a>
          <a
            id="00:55:57.507"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3357, '00:55:57.507')}
          >
            but to always be aiming for 100%{' '}
          </a>
          <a
            id="00:55:59.487"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3359, '00:55:59.487')}
          >
            and be close to it at every stage of life.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:56:02.005"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3362, '00:56:02.005')}
          >
            Consistency is key here.{' '}
          </a>
          <a
            id="00:56:04.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3364, '00:56:04.565')}
          >
            If you are not consistent,{' '}
          </a>
          <a
            id="00:56:06.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3366, '00:56:06.165')}
          >
            then the Law of Diminishing Returns certainly applies.{' '}
          </a>
          <a
            id="00:56:09.665"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3369, '00:56:09.665')}
          >
            So 80 or 90% of the benefit over many, many months{' '}
          </a>
          <a
            id="00:56:14.665"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3374, '00:56:14.665')}
          >
            is far better than 100%, but only half the time.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:56:21.040"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3381, '00:56:21.040')}
          >
            Yeah, one thing that I've found to be tremendously useful{' '}
          </a>
          <a
            id="00:56:23.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3383, '00:56:23.400')}
          >
            is to finish the workout while I still have energy{' '}
          </a>
          <a
            id="00:56:26.840"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3386, '00:56:26.840')}
          >
            to not take myself to exhaustion.{' '}
          </a>
          <a
            id="00:56:28.920"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3388, '00:56:28.920')}
          >
            And then I'm able to kind of talk about{' '}
          </a>
          <a
            id="00:56:30.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3390, '00:56:30.560')}
          >
            the dopamine wave pool.{' '}
          </a>
          <a
            id="00:56:31.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3391, '00:56:31.520')}
          >
            I'm able to sort of ride that into the rest of the day,{' '}
          </a>
          <a
            id="00:56:34.080"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3394, '00:56:34.080')}
          >
            feeling great.{' '}
          </a>
          <a
            id="00:56:34.920"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3394, '00:56:34.920')}
          >
            I sort of save or bank some of the vigor from the training{' '}
          </a>
          <a
            id="00:56:39.160"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3399, '00:56:39.160')}
          >
            to bring it into my work.{' '}
          </a>
          <a
            id="00:56:40.200"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3400, '00:56:40.200')}
          >
            But then again, I'm not an athlete.{' '}
          </a>
          <a
            id="00:56:41.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3401, '00:56:41.560')}
          >
            I get paid to think and to speak,{' '}
          </a>
          <a
            id="00:56:43.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3403, '00:56:43.280')}
          >
            not to lift weights or to run.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:56:45.948"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3405, '00:56:45.948')}
          >
            Another component of that is the balance between your sympathetic,{' '}
          </a>
          <a
            id="00:56:49.368"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3409, '00:56:49.368')}
          >
            which is your fight-or-flight nervous system,{' '}
          </a>
          <a
            id="00:56:51.368"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3411, '00:56:51.368')}
          >
            and your parasympathetic, which is your rest-or-digest nervous system.{' '}
          </a>
          <a
            id="00:56:55.368"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3415, '00:56:55.368')}
          >
            There is an anecdote which is likely true that many elite bodybuilders{' '}
          </a>
          <a
            id="00:56:59.868"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3419, '00:56:59.868')}
          >
            are very parasympathetic besides while they're lifting weights.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:57:04.443"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3424, '00:57:04.443')}
          >
            and they like to eat a lot.{' '}
          </a>
          <a
            id="00:57:06.143"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3426, '00:57:06.143')}
          >
            The lazy bear in the gym, kind of.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="00:57:07.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3427, '00:57:07.497')}
          >
            It's a phenomenal phenomenon.{' '}
          </a>
          <a
            id="00:57:08.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3428, '00:57:08.357')}
          >
            Absolutely.{' '}
          </a>
          <a
            id="00:57:10.177"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3430, '00:57:10.177')}
          >
            But that being said,{' '}
          </a>
          <a
            id="00:57:11.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3431, '00:57:11.697')}
          >
            after a very, very vigorous workout,{' '}
          </a>
          <a
            id="00:57:13.857"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3433, '00:57:13.857')}
          >
            for example, one where you're trained to failure,{' '}
          </a>
          <a
            id="00:57:15.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3435, '00:57:15.897')}
          >
            which bodybuilders and powerlifters do all the time,{' '}
          </a>
          <a
            id="00:57:18.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3438, '00:57:18.937')}
          >
            you feel the tiredness or you feel the strain{' '}
          </a>
          <a
            id="00:57:24.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3444, '00:57:24.217')}
          >
            from that heavy sympathetic activity{' '}
          </a>
          <a
            id="00:57:27.097"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3447, '00:57:27.097')}
          >
            when you are lifting a heavy weight.{' '}
          </a>
          <a
            id="00:57:29.137"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3449, '00:57:29.137')}
          >
            And it can potentially affect{' '}
          </a>
          <a
            id="00:57:31.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3451, '00:57:31.377')}
          >
            how you feel the rest of the day.{' '}
          </a>
          <a
            id="00:57:36.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3456, '00:57:36.377')}
          >
            So people who are highly cognitive{' '}
          </a>
          <a
            id="00:57:37.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3457, '00:57:37.497')}
          >
            do not like to have an extremely vigorous workout{' '}
          </a>
          <a
            id="00:57:40.177"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3460, '00:57:40.177')}
          >
            in the morning,{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="00:57:43.120"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3463, '00:57:43.120')}
          >
            When I exercise early in the morning,{' '}
          </a>
          <a
            id="00:57:45.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3465, '00:57:45.180')}
          >
            that is before 9 a.m., I have more energy all day long.{' '}
          </a>
          <a
            id="00:57:47.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3467, '00:57:47.980')}
          >
            If I do it mid-morning,{' '}
          </a>
          <a
            id="00:57:48.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3468, '00:57:48.940')}
          >
            I have experienced more of an afternoon crash.{' '}
          </a>
          <a
            id="00:57:51.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3471, '00:57:51.020')}
          >
            There's probably some circadian biology in there.{' '}
          </a>
          <a
            id="00:57:53.740"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3473, '00:57:53.740')}
          >
            I also noticed, and I've actually seen in my blood work,{' '}
          </a>
          <a
            id="00:57:56.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3476, '00:57:56.780')}
          >
            that if I don't get out for a 45-minute jog{' '}
          </a>
          <a
            id="00:58:00.060"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3480, '00:58:00.060')}
          >
            at least once a week,{' '}
          </a>
          <a
            id="00:58:02.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3482, '00:58:02.260')}
          >
            all of my blood profiles suffer in the direction{' '}
          </a>
          <a
            id="00:58:04.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3484, '00:58:04.560')}
          >
            that I don't want them to go.{' '}
          </a>
          <a
            id="00:58:05.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3485, '00:58:05.820')}
          >
            In particular, testosterone and estrogen{' '}
          </a>
          <a
            id="00:58:07.660"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3487, '00:58:07.660')}
          >
            move in directions that are not conducive to my goals.{' '}
          </a>
          <a
            id="00:58:10.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3490, '00:58:10.560')}
          >
            So I'd like to talk about some of the approaches{' '}
          </a>
          <a
            id="00:58:15.040"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3495, '00:58:15.040')}
          >
            that people can use in order to optimize hormones.{' '}
          </a>
          <a
            id="00:58:17.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3497, '00:58:17.400')}
          >
            And these days, for better or for worse,{' '}
          </a>
          <a
            id="00:58:20.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3500, '00:58:20.240')}
          >
            I think for worse, younger guys are asking about{' '}
          </a>
          <a
            id="00:58:25.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3505, '00:58:25.240')}
          >
            and using testosterone replacement therapy, so-called TRT.{' '}
          </a>
          <a
            id="00:58:29.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3509, '00:58:29.280')}
          >
            And I just want to frame this up by saying{' '}
          </a>
          <a
            id="00:58:30.960"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3510, '00:58:30.960')}
          >
            there is no strict cutoff for what is TRT.{' '}
          </a>
          <a
            id="00:58:33.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3513, '00:58:33.280')}
          >
            There are plenty of people whose blood levels{' '}
          </a>
          <a
            id="00:58:36.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3516, '00:58:36.280')}
          >
            of testosterone and estrogen{' '}
          </a>
          <a
            id="00:58:37.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3517, '00:58:37.480')}
          >
            are within the normal reference range{' '}
          </a>
          <a
            id="00:58:39.320"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3519, '00:58:39.320')}
          >
            and decide to start doing these things.{' '}
          </a>
          <a
            id="00:58:41.080"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3521, '00:58:41.080')}
          >
            Of course, they can limit fertility.{' '}
          </a>
          <a
            id="00:58:42.440"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3522, '00:58:42.440')}
          >
            There are a bunch of issues,{' '}
          </a>
          <a
            id="00:58:43.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3523, '00:58:43.540')}
          >
            even at non-quote-unquote steroidal{' '}
          </a>
          <a
            id="00:58:47.080"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3527, '00:58:47.080')}
          >
            performance-enhancing dosages.{' '}
          </a>
          <a
            id="00:58:49.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3529, '00:58:49.280')}
          >
            I'd love to frame this up by first defining our terms,{' '}
          </a>
          <a
            id="00:58:51.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3531, '00:58:51.480')}
          >
            because one of the challenges on the internet{' '}
          </a>
          <a
            id="00:58:53.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3533, '00:58:53.560')}
          >
            is people talk about TRT,{' '}
          </a>
          <a
            id="00:58:54.760"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3534, '00:58:54.760')}
          >
            then they'll talk about performance-enhancing drugs,{' '}
          </a>
          <a
            id="00:58:56.440"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3536, '00:58:56.440')}
          >
            they'll talk about steroids.{' '}
          </a>
          <a
            id="00:58:57.640"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3537, '00:58:57.640')}
          >
            They're all steroids, right?{' '}
          </a>
          <a
            id="00:58:59.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3539, '00:58:59.260')}
          >
            I mean, testosterone, estrogen are both steroid hormones.{' '}
          </a>
          <a
            id="00:59:02.620"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3542, '00:59:02.620')}
          >
            But what one considered replacement therapy{' '}
          </a>
          <a
            id="00:59:05.720"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3545, '00:59:05.720')}
          >
            versus what one considers performance-enhancing{' '}
          </a>
          <a
            id="00:59:08.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3548, '00:59:08.800')}
          >
            is going to depend, right?{' '}
          </a>
          <a
            id="00:59:10.360"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3550, '00:59:10.360')}
          >
            So here's my question.{' '}
          </a>
          <a
            id="00:59:13.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3553, '00:59:13.300')}
          >
            Why in the world, why in the world{' '}
          </a>
          <a
            id="00:59:17.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3557, '00:59:17.400')}
          >
            would any male in his teens or 20s or even 30s{' '}
          </a>
          <a
            id="00:59:23.640"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3563, '00:59:23.640')}
          >
            whose blood levels of testosterone and estrogen{' '}
          </a>
          <a
            id="00:59:26.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3566, '00:59:26.540')}
          >
            are at the appropriate levels,{' '}
          </a>
          <a
            id="00:59:27.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3567, '00:59:27.800')}
          >
            meaning within the normal reference range,{' '}
          </a>
          <a
            id="00:59:29.599"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3569, '00:59:29.599')}
          >
            why would they take exogenous testosterone{' '}
          </a>
          <a
            id="00:59:33.720"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3573, '00:59:33.720')}
          >
            given all the negative effects on fertility,{' '}
          </a>
          <a
            id="00:59:36.920"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3576, '00:59:36.920')}
          >
            some of the challenges that it can present{' '}
          </a>
          <a
            id="00:59:38.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3578, '00:59:38.560')}
          >
            if the dosages aren't quite right, et cetera,{' '}
          </a>
          <a
            id="00:59:40.920"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3580, '00:59:40.920')}
          >
            why would they do that?{' '}
          </a>
          <a
            id="00:59:42.159"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3582, '00:59:42.159')}
          >
            Certainly if they are not being paid{' '}
          </a>
          <a
            id="00:59:45.320"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3585, '00:59:45.320')}
          >
            for a particular endeavor,{' '}
          </a>
          <a
            id="00:59:47.040"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3587, '00:59:47.040')}
          >
            like they're not making money.{' '}
          </a>
          <a
            id="00:59:48.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3588, '00:59:48.280')}
          >
            If they are playing a sport,{' '}
          </a>
          <a
            id="00:59:49.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3589, '00:59:49.180')}
          >
            chances are they're not allowed to do that anyway.{' '}
          </a>
          <a
            id="00:59:50.880"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3590, '00:59:50.880')}
          >
            It's on the banned substances list.{' '}
          </a>
          <a
            id="00:59:53.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3593, '00:59:53.280')}
          >
            So to me, it just seems like a crazy idea.{' '}
          </a>
          <a
            id="00:59:57.120"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3597, '00:59:57.120')}
          >
            But then again, I'm of a generation{' '}
          </a>
          <a
            id="00:59:58.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3598, '00:59:58.520')}
          >
            that really hasn't thought about doing that stuff{' '}
          </a>
          <a
            id="01:00:00.840"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3600, '01:00:00.840')}
          >
            until people were in their 40s and 50s or even never.{' '}
          </a>
          <a
            id="01:00:04.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3604, '01:00:04.800')}
          >
            So is there ever a case for somebody in their 20s or 30s{' '}
          </a>
          <a
            id="01:00:08.440"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3608, '01:00:08.440')}
          >
            to take testosterone if their blood levels{' '}
          </a>
          <a
            id="01:00:11.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3611, '01:00:11.520')}
          >
            are within the 300 to 900 nanograms per deciliter{' '}
          </a>
          <a
            id="01:00:15.640"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3615, '01:00:15.640')}
          >
            reference range?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:00:16.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3616, '01:00:16.632')}
          >
            Not many cases, the reason for any performance-enhancing drug,{' '}
          </a>
          <a
            id="01:00:21.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3621, '01:00:21.632')}
          >
            whether or not it is a steroid, synthetic, bioidentical or otherwise,{' '}
          </a>
          <a
            id="01:00:26.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3626, '01:00:26.632')}
          >
            it varies a lot.{' '}
          </a>
          <a
            id="01:00:29.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3629, '01:00:29.632')}
          >
            Some individuals do it only for cosmetic reasons,{' '}
          </a>
          <a
            id="01:00:32.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3632, '01:00:32.632')}
          >
            even if it can have deleterious effects on the cosmetic appearance,{' '}
          </a>
          <a
            id="01:00:37.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3637, '01:00:37.632')}
          >
            for example, of your skin in the long run.{' '}
          </a>
          <a
            id="01:00:42.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3642, '01:00:42.632')}
          >
            Everyone has their different reason as far as like{' '}
          </a>
          <a
            id="01:00:46.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3646, '01:00:46.632')}
          >
            when does the benefit outweigh the detriment.{' '}
          </a>
          <a
            id="01:00:49.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3649, '01:00:49.632')}
          >
            Not very often if you're in your 20s{' '}
          </a>
          <a
            id="01:00:52.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3652, '01:00:52.632')}
          >
            and certainly almost hardly never.{' '}
          </a>
          <a
            id="01:00:55.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3655, '01:00:55.632')}
          >
            There's always rare cases like Kalman syndrome and whatnot,{' '}
          </a>
          <a
            id="01:00:58.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3658, '01:00:58.632')}
          >
            but almost never if you're very young.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:01:01.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3661, '01:01:01.992')}
          >
            Okay, so for people in their 20s, 30s and beyond,{' '}
          </a>
          <a
            id="01:01:05.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3665, '01:01:05.032')}
          >
            40s, et cetera,{' '}
          </a>
          <a
            id="01:01:06.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3666, '01:01:06.392')}
          >
            whose testosterone and estrogen levels{' '}
          </a>
          <a
            id="01:01:08.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3668, '01:01:08.992')}
          >
            are at the appropriate ratios{' '}
          </a>
          <a
            id="01:01:10.752"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3670, '01:01:10.752')}
          >
            and within the normal reference range{' '}
          </a>
          <a
            id="01:01:13.532"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3673, '01:01:13.532')}
          >
            and they feel pretty good, right?{' '}
          </a>
          <a
            id="01:01:14.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3674, '01:01:14.952')}
          >
            We talked about the Adam's exam{' '}
          </a>
          <a
            id="01:01:16.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3676, '01:01:16.272')}
          >
            or this sort of like feel pretty good{' '}
          </a>
          <a
            id="01:01:17.552"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3677, '01:01:17.552')}
          >
            is sort of code for libido energy recovery, et cetera,{' '}
          </a>
          <a
            id="01:01:21.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3681, '01:01:21.392')}
          >
            are feeling at least workable for their lifestyle.{' '}
          </a>
          <a
            id="01:01:26.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3686, '01:01:26.672')}
          >
            For those people,{' '}
          </a>
          <a
            id="01:01:27.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3687, '01:01:27.952')}
          >
            what can they do besides get great sleep,{' '}
          </a>
          <a
            id="01:01:31.712"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3691, '01:01:31.712')}
          >
            train but not too hard or too often, et cetera, et cetera?{' '}
          </a>
          <a
            id="01:01:34.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3694, '01:01:34.272')}
          >
            What are some of the things{' '}
          </a>
          <a
            id="01:01:35.112"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3695, '01:01:35.112')}
          >
            in the realm of supplementation{' '}
          </a>
          <a
            id="01:01:36.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3696, '01:01:36.672')}
          >
            that can help them optimize their testosterone and estrogen{' '}
          </a>
          <a
            id="01:01:40.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3700, '01:01:40.672')}
          >
            without suppressing their own endogenous production{' '}
          </a>
          <a
            id="01:01:44.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3704, '01:01:44.392')}
          >
            of testosterone and estrogen?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:01:46.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3706, '01:01:46.593')}
          >
            Let's mention creatine as the first one.{' '}
          </a>
          <a
            id="01:01:49.033"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3709, '01:01:49.033')}
          >
            Creatine is interesting{' '}
          </a>
          <a
            id="01:01:50.233"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3710, '01:01:50.233')}
          >
            because it has multiple different effects.{' '}
          </a>
          <a
            id="01:01:51.913"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3711, '01:01:51.913')}
          >
            It helps with amino acid synthesis.{' '}
          </a>
          <a
            id="01:01:54.313"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3714, '01:01:54.313')}
          >
            It also helps with oxidative stress.{' '}
          </a>
          <a
            id="01:01:56.813"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3716, '01:01:56.813')}
          >
            It can also serve as the backup fuel tank{' '}
          </a>
          <a
            id="01:01:59.073"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3719, '01:01:59.073')}
          >
            for your mitochondria.{' '}
          </a>
          <a
            id="01:02:00.113"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3720, '01:02:00.113')}
          >
            So kind of holding backup ATP.{' '}
          </a>
          <a
            id="01:02:02.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3722, '01:02:02.553')}
          >
            And it does slightly increase total testosterone.{' '}
          </a>
          <a
            id="01:02:05.753"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3725, '01:02:05.753')}
          >
            And it also increases the conversion of testosterone{' '}
          </a>
          <a
            id="01:02:08.393"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3728, '01:02:08.393')}
          >
            to dihydrotestosterone.{' '}
          </a>
          <a
            id="01:02:10.313"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3730, '01:02:10.313')}
          >
            So potentially it's especially useful in men{' '}
          </a>
          <a
            id="01:02:14.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3734, '01:02:14.273')}
          >
            in even their teenage years and their 20s.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:02:17.626"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3737, '01:02:17.626')}
          >
            You mentioned the conversion of testosterone{' '}
          </a>
          <a
            id="01:02:19.266"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3739, '01:02:19.266')}
          >
            to dihydrotestosterone, and there is mythology out there{' '}
          </a>
          <a
            id="01:02:22.466"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3742, '01:02:22.466')}
          >
            that creatine can increase hair loss.{' '}
          </a>
          <a
            id="01:02:24.146"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3744, '01:02:24.146')}
          >
            I'm guessing because there's at least one study{' '}
          </a>
          <a
            id="01:02:26.306"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3746, '01:02:26.306')}
          >
            showing that creatine can increase DHT,{' '}
          </a>
          <a
            id="01:02:28.826"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3748, '01:02:28.826')}
          >
            dihydrotestosterone and DHT is one of the primary hormones{' '}
          </a>
          <a
            id="01:02:32.906"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3752, '01:02:32.906')}
          >
            that can promote male pattern baldness.{' '}
          </a>
          <a
            id="01:02:35.706"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3755, '01:02:35.706')}
          >
            So the question therefore is,{' '}
          </a>
          <a
            id="01:02:38.266"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3758, '01:02:38.266')}
          >
            does creatine supplementation{' '}
          </a>
          <a
            id="01:02:41.226"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3761, '01:02:41.226')}
          >
            increase the rate of hair loss?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:02:44.052"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3764, '01:02:44.052')}
          >
            Theoretically, it can, but in each individual,{' '}
          </a>
          <a
            id="01:02:50.972"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3770, '01:02:50.972')}
          >
            preventing hair loss is a very poor reason to take creatine{' '}
          </a>
          <a
            id="01:02:54.372"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3774, '01:02:54.372')}
          >
            because it's not going to take you{' '}
          </a>
          <a
            id="01:02:55.652"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3775, '01:02:55.652')}
          >
            to a supra-physiologic level.{' '}
          </a>
          <a
            id="01:02:58.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3778, '01:02:58.452')}
          >
            It's not going to, you know,{' '}
          </a>
          <a
            id="01:03:00.692"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3780, '01:03:00.692')}
          >
            increase your androgens to an unnormal level of binding.{' '}
          </a>
          <a
            id="01:03:06.732"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3786, '01:03:06.732')}
          >
            So I feel like this,{' '}
          </a>
          <a
            id="01:03:09.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3789, '01:03:09.012')}
          >
            if that was a reason to not take creatine for hair loss,{' '}
          </a>
          <a
            id="01:03:12.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3792, '01:03:12.452')}
          >
            then that's.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:03:12.487"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3792, '01:03:12.487')}
          >
            then that's-{' '}
          </a>
          <a
            id="01:03:13.447"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3793, '01:03:13.447')}
          >
            Sorry, you mean hair loss is not a reason{' '}
          </a>
          <a
            id="01:03:15.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3795, '01:03:15.407')}
          >
            to avoid taking care of your hair?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:03:16.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3796, '01:03:16.503')}
          >
            Correct. Hair loss is not a reason to avoid taking creatine.{' '}
          </a>
          <a
            id="01:03:20.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3800, '01:03:20.503')}
          >
            Think of it as just bringing you to what you are naturally inclined to have.{' '}
          </a>
          <a
            id="01:03:27.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3807, '01:03:27.503')}
          >
            If your conversion of testosterone to DHT is already high,{' '}
          </a>
          <a
            id="01:03:30.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3810, '01:03:30.503')}
          >
            then often creatine does not affect this.{' '}
          </a>
          <a
            id="01:03:33.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3813, '01:03:33.503')}
          >
            It just kind of resets your balance between testosterone being aromatized to estrogen{' '}
          </a>
          <a
            id="01:03:39.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3819, '01:03:39.503')}
          >
            or being 5-alpha reduced DHT.{' '}
          </a>
          <a
            id="01:03:42.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3822, '01:03:42.503')}
          >
            It's not going to speed up hair loss more than just naturally being a male does.{' '}
          </a>
          <a
            id="01:03:47.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3827, '01:03:47.503')}
          >
            In some individuals, it will have no effect.{' '}
          </a>
          <a
            id="01:03:50.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3830, '01:03:50.503')}
          >
            In some individuals, for whatever reason, they have almost no 5-alpha reductase
            activity.{' '}
          </a>
          <a
            id="01:03:55.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3835, '01:03:55.503')}
          >
            It will return them to natural or normal.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:03:57.948"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3837, '01:03:57.948')}
          >
            I see. Well, I take five grams a day of creatine monohydrate.{' '}
          </a>
          <a
            id="01:04:01.468"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3841, '01:04:01.468')}
          >
            I do it for the tissue voluminizing effects for exercise benefits,{' '}
          </a>
          <a
            id="01:04:06.388"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3846, '01:04:06.388')}
          >
            but also for the cognitive effects. I don't know if it's increasing my hair loss.{' '}
          </a>
          <a
            id="01:04:09.908"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3849, '01:04:09.908')}
          >
            I mean, I've got a little bit of a sort of a widow's peak type hair loss.{' '}
          </a>
          <a
            id="01:04:13.308"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3853, '01:04:13.308')}
          >
            That's where it is for me. I suppose beard growth is associated with DHT too.{' '}
          </a>
          <a
            id="01:04:18.428"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3858, '01:04:18.428')}
          >
            Most, is that right? I, my, what I learned, but then again,{' '}
          </a>
          <a
            id="01:04:21.348"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3861, '01:04:21.348')}
          >
            I haven't been into this literature in a long time.{' '}
          </a>
          <a
            id="01:04:23.068"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3863, '01:04:23.068')}
          >
            Is that because of chain differences in receptors that DHT causes hair growth on{' '}
          </a>
          <a
            id="01:04:27.708"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3867, '01:04:27.708')}
          >
            the face and hair loss on the head. Is that right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:04:29.994"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3869, '01:04:29.994')}
          >
            Right?{' '}
          </a>
          <a
            id="01:04:30.834"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3870, '01:04:30.834')}
          >
            Yes, and the amount and the sensitivity{' '}
          </a>
          <a
            id="01:04:33.234"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3873, '01:04:33.234')}
          >
            and density of those receptors is genetically determined.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:04:37.385"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3877, '01:04:37.385')}
          >
            And is it true that if your mother's father was bald,{' '}
          </a>
          <a
            id="01:04:40.545"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3880, '01:04:40.545')}
          >
            that you will be bald in the same pattern{' '}
          </a>
          <a
            id="01:04:42.425"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3882, '01:04:42.425')}
          >
            and if that he wasn't, you won't?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:04:45.265"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3885, '01:04:45.265')}
          >
            That is a decent correlation.{' '}
          </a>
          <a
            id="01:04:47.265"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3887, '01:04:47.265')}
          >
            Part of the proposed mechanism of this,{' '}
          </a>
          <a
            id="01:04:49.645"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3889, '01:04:49.645')}
          >
            well, there's several genes{' '}
          </a>
          <a
            id="01:04:50.845"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3890, '01:04:50.845')}
          >
            and you can actually test your genes for hair loss.{' '}
          </a>
          <a
            id="01:04:53.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3893, '01:04:53.565')}
          >
            You do get a decent amount of them from your mother.{' '}
          </a>
          <a
            id="01:04:56.285"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3896, '01:04:56.285')}
          >
            The unique thing you get from your mother{' '}
          </a>
          <a
            id="01:04:58.205"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3898, '01:04:58.205')}
          >
            that she may have gotten from her father,{' '}
          </a>
          <a
            id="01:05:00.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3900, '01:05:00.565')}
          >
            that she got one of the copies from her father,{' '}
          </a>
          <a
            id="01:05:02.325"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3902, '01:05:02.325')}
          >
            is your X chromosome.{' '}
          </a>
          <a
            id="01:05:03.885"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3903, '01:05:03.885')}
          >
            And the androgen receptor gene is on your X chromosome.{' '}
          </a>
          <a
            id="01:05:07.525"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3907, '01:05:07.525')}
          >
            So all men got their androgen receptor gene{' '}
          </a>
          <a
            id="01:05:11.445"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3911, '01:05:11.445')}
          >
            from their mother.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:05:12.805"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3912, '01:05:12.805')}
          >
            It's on their X chromosome, not on the Y chromosome.{' '}
          </a>
          <a
            id="01:05:15.325"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3915, '01:05:15.325')}
          >
            Correct.{' '}
          </a>
          <a
            id="01:05:16.205"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3916, '01:05:16.205')}
          >
            Interesting.{' '}
          </a>
          <a
            id="01:05:17.045"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3917, '01:05:17.045')}
          >
            Even though all of the sort of,{' '}
          </a>
          <a
            id="01:05:18.725"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3918, '01:05:18.725')}
          >
            quote unquote, male promoting genes are on the Y chromosome,{' '}
          </a>
          <a
            id="01:05:23.445"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3923, '01:05:23.445')}
          >
            like mullerian inhibiting, et cetera.{' '}
          </a>
          <a
            id="01:05:25.445"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3925, '01:05:25.445')}
          >
            Interesting.{' '}
          </a>
          <a
            id="01:05:26.445"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3926, '01:05:26.445')}
          >
            Okay, so five grams a day of creatine{' '}
          </a>
          <a
            id="01:05:28.185"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3928, '01:05:28.185')}
          >
            for most people should be fine.{' '}
          </a>
          <a
            id="01:05:30.685"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3930, '01:05:30.685')}
          >
            Beneficial for tissue voluminizing,{' '}
          </a>
          <a
            id="01:05:32.325"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3932, '01:05:32.325')}
          >
            so strength, bringing water into the muscles,{' '}
          </a>
          <a
            id="01:05:35.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3935, '01:05:35.165')}
          >
            and for the cognitive effects{' '}
          </a>
          <a
            id="01:05:37.845"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3937, '01:05:37.845')}
          >
            and the clinical support for creatine,{' '}
          </a>
          <a
            id="01:05:39.645"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3939, '01:05:39.645')}
          >
            I think is quite strong at the five gram per day dosage.{' '}
          </a>
          <a
            id="01:05:42.765"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3942, '01:05:42.765')}
          >
            What other sorts of supplements can people benefit from?{' '}
          </a>
          <a
            id="01:05:45.965"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3945, '01:05:45.965')}
          >
            We already talked about the omegas{' '}
          </a>
          <a
            id="01:05:47.645"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3947, '01:05:47.645')}
          >
            and making sure that people are getting{' '}
          </a>
          <a
            id="01:05:48.845"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3948, '01:05:48.845')}
          >
            enough prebiotic fiber to support the gut microbiome{' '}
          </a>
          <a
            id="01:05:52.205"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3952, '01:05:52.205')}
          >
            and vitamin D.{' '}
          </a>
          <a
            id="01:05:54.045"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3954, '01:05:54.045')}
          >
            So what other supplement-based tools can people consider?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:05:57.642"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3957, '01:05:57.642')}
          >
            Another one we can loop in with creatine is betaine.{' '}
          </a>
          <a
            id="01:06:00.882"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3960, '01:06:00.882')}
          >
            Some people are non-responders to creatine,{' '}
          </a>
          <a
            id="01:06:03.482"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3963, '01:06:03.482')}
          >
            so you can increase that to 10 grams{' '}
          </a>
          <a
            id="01:06:05.681"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3965, '01:06:05.681')}
          >
            or you can use its cousin betaine to help with amino acid synthesis{' '}
          </a>
          <a
            id="01:06:09.602"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3969, '01:06:09.602')}
          >
            and shunting of energy.{' '}
          </a>
          <a
            id="01:06:11.922"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3971, '01:06:11.922')}
          >
            Along with that I would put L-carnitine,{' '}
          </a>
          <a
            id="01:06:14.642"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3974, '01:06:14.642')}
          >
            which is actually the smallest peptide hormone.{' '}
          </a>
          <a
            id="01:06:18.322"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3978, '01:06:18.322')}
          >
            It's just two amino acids that are put together.{' '}
          </a>
          <a
            id="01:06:20.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3980, '01:06:20.842')}
          >
            It's a hormone. Interesting.{' '}
          </a>
          <a
            id="01:06:23.722"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3983, '01:06:23.722')}
          >
            I'm not challenging it.{' '}
          </a>
          <a
            id="01:06:25.722"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3985, '01:06:25.722')}
          >
            Yeah, I would call it a peptide more than a hormone.{' '}
          </a>
          <a
            id="01:06:29.522"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3989, '01:06:29.522')}
          >
            I would not call L-carnitine a hormone,{' '}
          </a>
          <a
            id="01:06:32.002"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3992, '01:06:32.002')}
          >
            but I would call dopamine a hormone.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:06:23.782"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3983, '01:06:23.782')}
          >
            I'm not challenging it.{' '}
          </a>
          <a
            id="01:06:24.782"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3984, '01:06:24.782')}
          >
            Peptides.{' '}
          </a>
          <a
            id="01:06:25.782"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3985, '01:06:25.782')}
          >
            Yeah.{' '}
          </a>
          <a
            id="01:06:26.782"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3986, '01:06:26.782')}
          >
            I'm not challenging it.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:06:27.646"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3987, '01:06:27.646')}
          >
            Uh-huh.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:06:29.097"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3989, '01:06:29.097')}
          >
            Yo.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:06:34.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3994, '01:06:34.497')}
          >
            a neuro-hormone, it's so hard to define things{' '}
          </a>
          <a
            id="01:06:37.917"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3997, '01:06:37.917')}
          >
            as transmitters or hormones at some level.{' '}
          </a>
          <a
            id="01:06:39.917"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3999, '01:06:39.917')}
          >
            I agree.{' '}
          </a>
          <a
            id="01:06:40.777"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4000, '01:06:40.777')}
          >
            So L-carnitine, actually I should backtrack,{' '}
          </a>
          <a
            id="01:06:43.597"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4003, '01:06:43.597')}
          >
            betaine, do you recall what dosage people{' '}
          </a>
          <a
            id="01:06:47.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4007, '01:06:47.957')}
          >
            typically would take, if they're a creatine non-responder?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:06:36.016"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(3996, '01:06:36.016')}
          >
            It's so hard to.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:06:51.507"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4011, '01:06:51.507')}
          >
            One to three grams.{' '}
          </a>
          <a
            id="01:06:52.887"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4012, '01:06:52.887')}
          >
            In fact, several versions of creatine{' '}
          </a>
          <a
            id="01:06:55.287"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4015, '01:06:55.287')}
          >
            have beta-ene mixed in{' '}
          </a>
          <a
            id="01:06:57.147"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4017, '01:06:57.147')}
          >
            because it helps with the processing{' '}
          </a>
          <a
            id="01:06:59.047"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4019, '01:06:59.047')}
          >
            of methionine and homocysteine.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:06:52.773"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4012, '01:06:52.773')}
          >
            In fact, so.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:07:00.822"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4020, '01:07:00.822')}
          >
            So if somebody is already taking creatine{' '}
          </a>
          <a
            id="01:07:03.062"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4023, '01:07:03.062')}
          >
            and likes it and responds to it,{' '}
          </a>
          <a
            id="01:07:04.622"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4024, '01:07:04.622')}
          >
            I'll raise my hand such as myself,{' '}
          </a>
          <a
            id="01:07:06.542"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4026, '01:07:06.542')}
          >
            would adding betaine help{' '}
          </a>
          <a
            id="01:07:08.582"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4028, '01:07:08.582')}
          >
            or is it redundant with creatine?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:07:10.981"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4030, '01:07:10.981')}
          >
            Only if their homocysteine is persistently elevated and homocysteine is kind of like{' '}
          </a>
          <a
            id="01:07:14.901"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4034, '01:07:14.901')}
          >
            an inflammatory marker that can build up if you're not converting enough of it
            downstream.{' '}
          </a>
          <a
            id="01:07:19.621"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4039, '01:07:19.621')}
          >
            How would I know?{' '}
          </a>
          <a
            id="01:07:21.301"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4041, '01:07:21.301')}
          >
            Just a blood test.{' '}
          </a>
          <a
            id="01:07:22.421"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4042, '01:07:22.421')}
          >
            Okay.{' '}
          </a>
          <a
            id="01:07:22.661"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4042, '01:07:22.661')}
          >
            Or if you knew your MTHFR polymorphism, which is basically how you add methyl groups to{' '}
          </a>
          <a
            id="01:07:29.941"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4049, '01:07:29.941')}
          >
            codon, what would that be?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:07:22.726"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4042, '01:07:22.726')}
          >
            you{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:07:31.130"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4051, '01:07:31.130')}
          >
            many things in the body.{' '}
          </a>
          <a
            id="01:07:32.330"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4052, '01:07:32.330')}
          >
            Great.{' '}
          </a>
          <a
            id="01:07:33.170"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4053, '01:07:33.170')}
          >
            Any side effects of beta-ene that people should be aware of?{' '}
          </a>
          <a
            id="01:07:36.410"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4056, '01:07:36.410')}
          >
            Not that I know of.{' '}
          </a>
          <a
            id="01:07:37.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4057, '01:07:37.310')}
          >
            Okay.{' '}
          </a>
          <a
            id="01:07:38.150"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4058, '01:07:38.150')}
          >
            People can look it up on examine.com{' '}
          </a>
          <a
            id="01:07:39.730"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4059, '01:07:39.730')}
          >
            is a great site for that.{' '}
          </a>
          <a
            id="01:07:40.650"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4060, '01:07:40.650')}
          >
            They'll surely list it.{' '}
          </a>
          <a
            id="01:07:41.730"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4061, '01:07:41.730')}
          >
            They just revamped their site, by the way,{' '}
          </a>
          <a
            id="01:07:43.330"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4063, '01:07:43.330')}
          >
            and it was awesome before and it's platinum now.{' '}
          </a>
          <a
            id="01:07:48.430"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4068, '01:07:48.430')}
          >
            So L-carnitine, what are the ways to take L-carnitine?{' '}
          </a>
          <a
            id="01:07:51.810"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4071, '01:07:51.810')}
          >
            I know that there's an oral form,{' '}
          </a>
          <a
            id="01:07:53.390"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4073, '01:07:53.390')}
          >
            so capsules and there's injectables.{' '}
          </a>
          <a
            id="01:07:55.090"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4075, '01:07:55.090')}
          >
            Injectables, I think you need a prescription.{' '}
          </a>
          <a
            id="01:07:57.250"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4077, '01:07:57.250')}
          >
            Is that right?{' '}
          </a>
          <a
            id="01:07:58.090"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4078, '01:07:58.090')}
          >
            Correct.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:07:58.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4078, '01:07:58.450')}
          >
            You need a prescription for the injectables{' '}
          </a>
          <a
            id="01:08:00.290"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4080, '01:08:00.290')}
          >
            or you should really get a prescription for the injectables.{' '}
          </a>
          <a
            id="01:08:03.710"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4083, '01:08:03.710')}
          >
            For when you inject it,{' '}
          </a>
          <a
            id="01:08:06.010"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4086, '01:08:06.010')}
          >
            of course, at the supervision of your doctor,{' '}
          </a>
          <a
            id="01:08:08.130"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4088, '01:08:08.130')}
          >
            it's usually done intramuscularly.{' '}
          </a>
          <a
            id="01:08:10.050"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4090, '01:08:10.050')}
          >
            It's an aqueous solution.{' '}
          </a>
          <a
            id="01:08:11.850"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4091, '01:08:11.850')}
          >
            So it does not have like an oil or a carrier oil in it{' '}
          </a>
          <a
            id="01:08:14.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4094, '01:08:14.350')}
          >
            like testosterone esters do.{' '}
          </a>
          <a
            id="01:08:17.690"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4097, '01:08:17.690')}
          >
            However, if you inject it too superficially,{' '}
          </a>
          <a
            id="01:08:20.850"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4100, '01:08:20.850')}
          >
            it's not gonna make or break anything.{' '}
          </a>
          <a
            id="01:08:22.370"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4102, '01:08:22.370')}
          >
            Often it just burns if you inject it subcutaneously.{' '}
          </a>
          <a
            id="01:08:25.570"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4105, '01:08:25.570')}
          >
            And it does not disseminate throughout the body as well.{' '}
          </a>
          <a
            id="01:08:29.410"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4109, '01:08:29.410')}
          >
            L-carnitine potentially has localized effects{' '}
          </a>
          <a
            id="01:08:32.930"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4112, '01:08:32.930')}
          >
            if you inject it.{' '}
          </a>
          <a
            id="01:08:34.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4114, '01:08:34.450')}
          >
            If you ingest it orally,{' '}
          </a>
          <a
            id="01:08:36.730"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4116, '01:08:36.730')}
          >
            then it has a very low bioavailability, maybe only 10%.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:08:40.283"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4120, '01:08:40.283')}
          >
            Well, I think most people are going to be able to get L-carnitine only or, you know,{' '}
          </a>
          <a
            id="01:08:44.443"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4124, '01:08:44.443')}
          >
            in its capsule form.{' '}
          </a>
          <a
            id="01:08:46.323"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4126, '01:08:46.323')}
          >
            So what are the dosages of L-carnitine that one needs to ingest then if they want to get{' '}
          </a>
          <a
            id="01:08:50.443"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4130, '01:08:50.443')}
          >
            a benefit?{' '}
          </a>
          <a
            id="01:08:51.443"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4131, '01:08:51.443')}
          >
            Because if only 10% is being absorbed, it's probably a lot of L-carnitine.{' '}
          </a>
          <a
            id="01:08:56.463"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4136, '01:08:56.463')}
          >
            How much should people take per day?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:08:58.053"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4138, '01:08:58.053')}
          >
            Usually I recommend for oral L-carnitine between 1,000 mg and up to 4,000 or 5,000 mg.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:09:05.747"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4145, '01:09:05.747')}
          >
            or one to four, maybe even five grams, correct?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:09:08.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4148, '01:09:08.937')}
          >
            Up to five grams a day.{' '}
          </a>
          <a
            id="01:09:10.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4150, '01:09:10.937')}
          >
            If you're on that much,{' '}
          </a>
          <a
            id="01:09:11.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4151, '01:09:11.937')}
          >
            especially if you have a dysregulated gut microbiome,{' '}
          </a>
          <a
            id="01:09:14.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4154, '01:09:14.937')}
          >
            you should be concerned with TMAO,{' '}
          </a>
          <a
            id="01:09:17.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4157, '01:09:17.937')}
          >
            which is a potential carcinogen that both carnitine and choline can convert into.{' '}
          </a>
          <a
            id="01:09:22.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4162, '01:09:22.937')}
          >
            Your gut microbiota determine how much that happens.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:09:26.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4166, '01:09:26.437')}
          >
            Is it true that I can offset any negative effects of alpha-GPC choline,{' '}
          </a>
          <a
            id="01:09:32.037"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4172, '01:09:32.037')}
          >
            that is NL-carnitine, that I take by ingesting garlic? Is that right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:09:37.287"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4177, '01:09:37.287')}
          >
            There's a compound in garlic called allicin.{' '}
          </a>
          <a
            id="01:09:39.847"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4179, '01:09:39.847')}
          >
            I believe it's A-L-L-I-C-I-N.{' '}
          </a>
          <a
            id="01:09:42.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4182, '01:09:42.167')}
          >
            It's also part of the scientific name,{' '}
          </a>
          <a
            id="01:09:43.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4183, '01:09:43.727')}
          >
            the genus of types of garlic.{' '}
          </a>
          <a
            id="01:09:46.967"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4186, '01:09:46.967')}
          >
            And this can help decrease the conversion to TMAO.{' '}
          </a>
          <a
            id="01:09:49.967"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4189, '01:09:49.967')}
          >
            Berberine actually slightly decreases the conversion{' '}
          </a>
          <a
            id="01:09:52.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4192, '01:09:52.327')}
          >
            to TMAO as well,{' '}
          </a>
          <a
            id="01:09:54.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4194, '01:09:54.167')}
          >
            probably through alteration of the gut microbiome{' '}
          </a>
          <a
            id="01:09:56.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4196, '01:09:56.727')}
          >
            and then just optimizing your gut microbiome{' '}
          </a>
          <a
            id="01:09:59.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4199, '01:09:59.327')}
          >
            can decrease conversion.{' '}
          </a>
          <a
            id="01:10:00.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4200, '01:10:00.327')}
          >
            So not everyone needs allicin,{' '}
          </a>
          <a
            id="01:10:02.467"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4202, '01:10:02.467')}
          >
            but it's something that you should certainly consider{' '}
          </a>
          <a
            id="01:10:04.367"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4204, '01:10:04.367')}
          >
            if you were on a high dose.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:10:05.755"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4205, '01:10:05.755')}
          >
            I'm going to continue to take the 600 milligrams of garlic every time I take my
            l-carnitine{' '}
          </a>
          <a
            id="01:10:11.955"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4211, '01:10:11.955')}
          >
            but I'm going to skip the berberine because berberine gives me brutal headaches and it{' '}
          </a>
          <a
            id="01:10:15.235"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4215, '01:10:15.235')}
          >
            makes me crave carbohydrates because it drops my blood sugar.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:10:17.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4217, '01:10:17.450')}
          >
            It has many other effects including the dawn phenomenon where it drops your blood sugar
            when you're sleeping and you can't even realize it.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:10:23.947"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4223, '01:10:23.947')}
          >
            I am not a fan of berberine,{' '}
          </a>
          <a
            id="01:10:26.047"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4226, '01:10:26.047')}
          >
            and I'm sorry for those of you that are.{' '}
          </a>
          <a
            id="01:10:28.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4228, '01:10:28.327')}
          >
            I'm not trying to offend anyone,{' '}
          </a>
          <a
            id="01:10:29.687"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4229, '01:10:29.687')}
          >
            although frankly, if you're being offended{' '}
          </a>
          <a
            id="01:10:31.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4231, '01:10:31.607')}
          >
            by my stance on berberine,{' '}
          </a>
          <a
            id="01:10:33.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4233, '01:10:33.567')}
          >
            then maybe we should have another discussion.{' '}
          </a>
          <a
            id="01:10:35.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4235, '01:10:35.727')}
          >
            In any case, injectable L-carnitine,{' '}
          </a>
          <a
            id="01:10:38.207"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4238, '01:10:38.207')}
          >
            if one can get that through a doctor,{' '}
          </a>
          <a
            id="01:10:39.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4239, '01:10:39.727')}
          >
            how much is absorbed and how much should one take.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:10:43.724"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4243, '01:10:43.724')}
          >
            Almost all of it's absorbed in general you're taking between 500 milligrams up to you
            can take a pretty high dose up to 2,000 milligrams.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:10:52.010"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4252, '01:10:52.010')}
          >
            And what we did not talk about is what L-carnitine does.{' '}
          </a>
          <a
            id="01:10:56.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4256, '01:10:56.510')}
          >
            So why should someone go through all of this?{' '}
          </a>
          <a
            id="01:10:59.030"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4259, '01:10:59.030')}
          >
            Is it to optimize testosterone?{' '}
          </a>
          <a
            id="01:11:00.790"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4260, '01:11:00.790')}
          >
            Is it working on the receptor side?{' '}
          </a>
          <a
            id="01:11:03.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4263, '01:11:03.350')}
          >
            What's L-carnitine doing?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:11:05.004"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4265, '01:11:05.004')}
          >
            It's a shuttle.{' '}
          </a>
          <a
            id="01:11:06.444"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4266, '01:11:06.444')}
          >
            So I think it's named carnitine palmitoyl coenzyme A.{' '}
          </a>
          <a
            id="01:11:11.004"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4271, '01:11:11.004')}
          >
            Basically, it just takes nutrients{' '}
          </a>
          <a
            id="01:11:13.444"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4273, '01:11:13.444')}
          >
            from outside your mitochondria and puts them in.{' '}
          </a>
          <a
            id="01:11:16.364"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4276, '01:11:16.364')}
          >
            It also has a unique effect.{' '}
          </a>
          <a
            id="01:11:18.084"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4278, '01:11:18.084')}
          >
            Well, not too unique,{' '}
          </a>
          <a
            id="01:11:19.084"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4279, '01:11:19.084')}
          >
            because tidalafil actually has this effect as well,{' '}
          </a>
          <a
            id="01:11:21.624"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4281, '01:11:21.624')}
          >
            is that it increases the density of the androgen receptor{' '}
          </a>
          <a
            id="01:11:25.164"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4285, '01:11:25.164')}
          >
            in the cytoplasm of your cells.{' '}
          </a>
          <a
            id="01:11:28.004"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4288, '01:11:28.004')}
          >
            So even if your androgen receptor sensitivity doesn't change{' '}
          </a>
          <a
            id="01:11:31.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4291, '01:11:31.244')}
          >
            and even if your testosterone does not change,{' '}
          </a>
          <a
            id="01:11:34.184"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4294, '01:11:34.184')}
          >
            you will have more testosterone binding{' '}
          </a>
          <a
            id="01:11:36.084"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4296, '01:11:36.084')}
          >
            to that increased number of receptors.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:11:38.247"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4298, '01:11:38.247')}
          >
            Does one need to cycle L-carnitine, creatine, betaine?{' '}
          </a>
          <a
            id="01:11:42.287"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4302, '01:11:42.287')}
          >
            No.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:11:42.449"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4302, '01:11:42.449')}
          >
            No reason to cycle any of those.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:11:45.115"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4305, '01:11:45.115')}
          >
            okay, what other supplements can one use{' '}
          </a>
          <a
            id="01:11:47.575"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4307, '01:11:47.575')}
          >
            to try and improve hormone profiles?{' '}
          </a>
          <a
            id="01:11:50.195"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4310, '01:11:50.195')}
          >
            And here I realize we're using a very broad brush{' '}
          </a>
          <a
            id="01:11:52.995"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4312, '01:11:52.995')}
          >
            because when we say improve hormone profiles,{' '}
          </a>
          <a
            id="01:11:54.715"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4314, '01:11:54.715')}
          >
            what are we really talking about?{' '}
          </a>
          <a
            id="01:11:56.255"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4316, '01:11:56.255')}
          >
            And for me, at least I think about the subjective stuff.{' '}
          </a>
          <a
            id="01:12:01.755"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4321, '01:12:01.755')}
          >
            You know, do people feel like they are going to have{' '}
          </a>
          <a
            id="01:12:03.835"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4323, '01:12:03.835')}
          >
            more energy as a consequence of doing these things?{' '}
          </a>
          <a
            id="01:12:06.095"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4326, '01:12:06.095')}
          >
            Are they going to have the more optimized libido?{' '}
          </a>
          <a
            id="01:12:09.055"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4329, '01:12:09.055')}
          >
            Are they going to have more optimized{' '}
          </a>
          <a
            id="01:12:11.375"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4331, '01:12:11.375')}
          >
            recovery from exercise, right?{' '}
          </a>
          <a
            id="01:12:12.675"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4332, '01:12:12.675')}
          >
            Because, I mean, it's not clear to me{' '}
          </a>
          <a
            id="01:12:14.395"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4334, '01:12:14.395')}
          >
            that taking one's testosterone from 600 to 800{' '}
          </a>
          <a
            id="01:12:16.995"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4336, '01:12:16.995')}
          >
            is always going to be a good thing,{' '}
          </a>
          <a
            id="01:12:18.115"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4338, '01:12:18.115')}
          >
            especially if estrogen is increasing in parallel.{' '}
          </a>
          <a
            id="01:12:20.915"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4340, '01:12:20.915')}
          >
            That could cause issues.{' '}
          </a>
          <a
            id="01:12:22.355"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4342, '01:12:22.355')}
          >
            It could certainly make things better.{' '}
          </a>
          <a
            id="01:12:23.875"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4343, '01:12:23.875')}
          >
            It could certainly make things worse, right?{' '}
          </a>
          <a
            id="01:12:26.195"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4346, '01:12:26.195')}
          >
            So with that backdrop,{' '}
          </a>
          <a
            id="01:12:29.595"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4349, '01:12:29.595')}
          >
            what are some of the other things people can take?{' '}
          </a>
          <a
            id="01:12:31.315"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4351, '01:12:31.315')}
          >
            And then we'll go back to this issue{' '}
          </a>
          <a
            id="01:12:32.315"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4352, '01:12:32.315')}
          >
            of what really is optimization.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:12:34.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4354, '01:12:34.357')}
          >
            Let's briefly mention vitamin D, which is also a hormone.{' '}
          </a>
          <a
            id="01:12:37.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4357, '01:12:37.357')}
          >
            It's actually a sterol hormone.{' '}
          </a>
          <a
            id="01:12:39.317"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4359, '01:12:39.317')}
          >
            And if you have deficient vitamin D and you replace it,{' '}
          </a>
          <a
            id="01:12:42.997"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4362, '01:12:42.997')}
          >
            then you will optimize your testosterone.{' '}
          </a>
          <a
            id="01:12:45.997"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4365, '01:12:45.997')}
          >
            Let's also mention boron.{' '}
          </a>
          <a
            id="01:12:47.237"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4367, '01:12:47.237')}
          >
            So if you have a very high SHBG,{' '}
          </a>
          <a
            id="01:12:49.117"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4369, '01:12:49.117')}
          >
            boron can acutely help lower it,{' '}
          </a>
          <a
            id="01:12:51.157"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4371, '01:12:51.157')}
          >
            usually in a dose of five to 12 milligrams per day.{' '}
          </a>
          <a
            id="01:12:54.637"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4374, '01:12:54.637')}
          >
            It's not really a sustained effect,{' '}
          </a>
          <a
            id="01:12:56.637"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4376, '01:12:56.637')}
          >
            but boron is depleted in soils.{' '}
          </a>
          <a
            id="01:12:59.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4379, '01:12:59.357')}
          >
            In many countries, I believe it's very high in soils,{' '}
          </a>
          <a
            id="01:13:01.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4381, '01:13:01.957')}
          >
            in Greece and Turkey, so eating dates or raisins{' '}
          </a>
          <a
            id="01:13:04.477"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4384, '01:13:04.477')}
          >
            that are from those areas potentially have more boron.{' '}
          </a>
          <a
            id="01:13:07.477"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4387, '01:13:07.477')}
          >
            Boron also might be one of the reasons{' '}
          </a>
          <a
            id="01:13:09.797"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4389, '01:13:09.797')}
          >
            why the reference range for testosterone{' '}
          </a>
          <a
            id="01:13:12.517"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4392, '01:13:12.517')}
          >
            is much higher in those countries than other countries.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:13:15.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4395, '01:13:15.937')}
          >
            And just to remind people that SHBG,{' '}
          </a>
          <a
            id="01:13:18.417"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4398, '01:13:18.417')}
          >
            sex hormone binding globulin,{' '}
          </a>
          <a
            id="01:13:19.777"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4399, '01:13:19.777')}
          >
            is attaching to the testosterone molecule{' '}
          </a>
          <a
            id="01:13:22.017"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4402, '01:13:22.017')}
          >
            and limiting the amount of so-called free testosterone{' '}
          </a>
          <a
            id="01:13:24.297"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4404, '01:13:24.297')}
          >
            that's available to have its impact on cells.{' '}
          </a>
          <a
            id="01:13:26.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4406, '01:13:26.537')}
          >
            When Dr. Peter Atiyah was on this podcast,{' '}
          </a>
          <a
            id="01:13:28.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4408, '01:13:28.897')}
          >
            in fact, sitting in that very chair,{' '}
          </a>
          <a
            id="01:13:30.577"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4410, '01:13:30.577')}
          >
            he said that the ideal level of free testosterone in males{' '}
          </a>
          <a
            id="01:13:34.257"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4414, '01:13:34.257')}
          >
            should be about 2% of one's total testosterone.{' '}
          </a>
          <a
            id="01:13:37.777"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4417, '01:13:37.777')}
          >
            Would you agree with that number or disagree?{' '}
          </a>
          <a
            id="01:13:39.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4419, '01:13:39.657')}
          >
            I'm sure Peter would be fine if you said either.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:13:41.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4421, '01:13:41.992')}
          >
            2% is a good rule of thumb.{' '}
          </a>
          <a
            id="01:13:44.512"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4424, '01:13:44.512')}
          >
            Usually the reference range is between about 1% and 4%.{' '}
          </a>
          <a
            id="01:13:48.432"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4428, '01:13:48.432')}
          >
            Some people do have genetic polymorphisms in SHBG,{' '}
          </a>
          <a
            id="01:13:52.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4432, '01:13:52.312')}
          >
            a specific gene mutation where they have very low SHBGs.{' '}
          </a>
          <a
            id="01:13:57.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4437, '01:13:57.392')}
          >
            Also men that have varicose veins in their testes,{' '}
          </a>
          <a
            id="01:14:00.292"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4440, '01:14:00.292')}
          >
            also known as varicoceles, tend to have very high SHBGs.{' '}
          </a>
          <a
            id="01:14:04.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4444, '01:14:04.672')}
          >
            So that percentage would likely be less than 2%.{' '}
          </a>
          <a
            id="01:14:07.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4447, '01:14:07.672')}
          >
            So just because your percentage of free T to total T{' '}
          </a>
          <a
            id="01:14:12.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4452, '01:14:12.672')}
          >
            is a little bit above or below 2%, that's okay.{' '}
          </a>
          <a
            id="01:14:17.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4457, '01:14:17.272')}
          >
            We just need to figure out the reason why it is.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:14:19.690"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4459, '01:14:19.690')}
          >
            How would somebody know if they have varicose veins in their testicles,{' '}
          </a>
          <a
            id="01:14:22.930"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4462, '01:14:22.930')}
          >
            especially if their testicles are still attached to their body?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:14:27.858"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4467, '01:14:27.858')}
          >
            Sometimes it's hard to tell, there is several grades.{' '}
          </a>
          <a
            id="01:14:31.398"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4471, '01:14:31.398')}
          >
            If you have a grade three or a grade four varicoseal,{' '}
          </a>
          <a
            id="01:14:35.398"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4475, '01:14:35.398')}
          >
            it has what's called a bag of worms appearance.{' '}
          </a>
          <a
            id="01:14:37.758"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4477, '01:14:37.758')}
          >
            So think about if you've just resistance trained{' '}
          </a>
          <a
            id="01:14:40.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4480, '01:14:40.258')}
          >
            or it's a really hot day{' '}
          </a>
          <a
            id="01:14:42.038"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4482, '01:14:42.038')}
          >
            or you're wearing very tight fitting clothing,{' '}
          </a>
          <a
            id="01:14:44.698"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4484, '01:14:44.698')}
          >
            then if you feel it and it almost feels like{' '}
          </a>
          <a
            id="01:14:46.578"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4486, '01:14:46.578')}
          >
            there's worms in the scrotum.{' '}
          </a>
          <a
            id="01:14:49.378"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4489, '01:14:49.378')}
          >
            The other way is to do-{' '}
          </a>
          <a
            id="01:14:50.578"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4490, '01:14:50.578')}
          >
            It's a scary visual.{' '}
          </a>
          <a
            id="01:14:51.638"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4491, '01:14:51.638')}
          >
            Yeah, bag of worms.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:14:52.495"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4492, '01:14:52.495')}
          >
            Worms.{' '}
          </a>
          <a
            id="01:14:53.335"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4493, '01:14:53.335')}
          >
            Yeah.{' '}
          </a>
          <a
            id="01:14:54.155"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4494, '01:14:54.155')}
          >
            Well, it was just that, yeah, anyway,{' '}
          </a>
          <a
            id="01:14:55.455"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4495, '01:14:55.455')}
          >
            I think parasites when I hear that,{' '}
          </a>
          <a
            id="01:14:57.095"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4497, '01:14:57.095')}
          >
            but that's not what you're referring to.{' '}
          </a>
          <a
            id="01:14:58.175"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4498, '01:14:58.175')}
          >
            You're talking about just the texture.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:15:00.950"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4500, '01:15:00.950')}
          >
            Sure.{' '}
          </a>
          <a
            id="01:15:01.790"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4501, '01:15:01.790')}
          >
            The best way for most people to check{' '}
          </a>
          <a
            id="01:15:03.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4503, '01:15:03.310')}
          >
            is to valsalva for a long period of time.{' '}
          </a>
          <a
            id="01:15:06.950"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4506, '01:15:06.950')}
          >
            When you valsalva, venous return will decrease.{' '}
          </a>
          <a
            id="01:15:11.190"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4511, '01:15:11.190')}
          >
            Can you explain valsalva for people?{' '}
          </a>
          <a
            id="01:15:12.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4512, '01:15:12.750')}
          >
            It's bearing down, like you're lifting a weight{' '}
          </a>
          <a
            id="01:15:14.670"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4514, '01:15:14.670')}
          >
            or having a bowel movement where you swallow.{' '}
          </a>
          <a
            id="01:15:18.910"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4518, '01:15:18.910')}
          >
            And a lot of times you can almost see buildup{' '}
          </a>
          <a
            id="01:15:22.110"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4522, '01:15:22.110')}
          >
            of blood in your jugular veins as well.{' '}
          </a>
          <a
            id="01:15:26.550"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4526, '01:15:26.550')}
          >
            So you have decreased blood return to the heart{' '}
          </a>
          <a
            id="01:15:30.230"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4530, '01:15:30.230')}
          >
            and increased blood in the veins themselves.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:15:34.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4534, '01:15:34.312')}
          >
            I'd like to take a brief break{' '}
          </a>
          <a
            id="01:15:36.752"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4536, '01:15:36.752')}
          >
            and thank our sponsor InsideTracker.{' '}
          </a>
          <a
            id="01:15:39.712"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4539, '01:15:39.712')}
          >
            InsideTracker is a personalized nutrition platform{' '}
          </a>
          <a
            id="01:15:42.172"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4542, '01:15:42.172')}
          >
            that analyzes data from your blood and DNA{' '}
          </a>
          <a
            id="01:15:44.692"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4544, '01:15:44.692')}
          >
            to help you better understand your body{' '}
          </a>
          <a
            id="01:15:46.332"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4546, '01:15:46.332')}
          >
            and help you reach your health goals.{' '}
          </a>
          <a
            id="01:15:48.172"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4548, '01:15:48.172')}
          >
            I've long been a believer in getting regular blood work done{' '}
          </a>
          <a
            id="01:15:50.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4550, '01:15:50.832')}
          >
            for the simple reason that many of the factors{' '}
          </a>
          <a
            id="01:15:53.252"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4553, '01:15:53.252')}
          >
            that impact your immediate and long-term health{' '}
          </a>
          <a
            id="01:15:55.252"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4555, '01:15:55.252')}
          >
            can only be analyzed from a quality blood test.{' '}
          </a>
          <a
            id="01:15:57.852"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4557, '01:15:57.852')}
          >
            The problem with a lot of blood and DNA tests out there,{' '}
          </a>
          <a
            id="01:15:59.932"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4559, '01:15:59.932')}
          >
            however, is that you get data back about metabolic factors,{' '}
          </a>
          <a
            id="01:16:03.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4563, '01:16:03.452')}
          >
            lipids, and hormones, and so forth,{' '}
          </a>
          <a
            id="01:16:04.972"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4564, '01:16:04.972')}
          >
            but you don't know what to do with those data.{' '}
          </a>
          <a
            id="01:16:06.732"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4566, '01:16:06.732')}
          >
            InsideTracker solves that problem{' '}
          </a>
          <a
            id="01:16:08.492"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4568, '01:16:08.492')}
          >
            and makes it very easy for you to understand{' '}
          </a>
          <a
            id="01:16:10.852"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4570, '01:16:10.852')}
          >
            what sorts of nutritional, behavioral,{' '}
          </a>
          <a
            id="01:16:13.852"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4573, '01:16:13.852')}
          >
            maybe even supplementation-based interventions{' '}
          </a>
          <a
            id="01:16:16.692"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4576, '01:16:16.692')}
          >
            you might want to take on{' '}
          </a>
          <a
            id="01:16:17.852"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4577, '01:16:17.852')}
          >
            in order to adjust the numbers of those metabolic factors,{' '}
          </a>
          <a
            id="01:16:20.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4580, '01:16:20.452')}
          >
            hormones, lipids, and other things{' '}
          </a>
          <a
            id="01:16:22.232"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4582, '01:16:22.232')}
          >
            that impact your immediate and long-term health{' '}
          </a>
          <a
            id="01:16:24.192"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4584, '01:16:24.192')}
          >
            to bring those numbers into the ranges that are appropriate{' '}
          </a>
          <a
            id="01:16:27.212"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4587, '01:16:27.212')}
          >
            and indeed optimal for you.{' '}
          </a>
          <a
            id="01:16:29.072"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4589, '01:16:29.072')}
          >
            If you'd like to try InsideTracker,{' '}
          </a>
          <a
            id="01:16:30.472"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4590, '01:16:30.472')}
          >
            you can visit insidetracker.com slash Huberman{' '}
          </a>
          <a
            id="01:16:33.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4593, '01:16:33.012')}
          >
            and get 20% off any of InsideTracker's plans.{' '}
          </a>
          <a
            id="01:16:35.652"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4595, '01:16:35.652')}
          >
            That's insidetracker.com slash Huberman to get 20% off.{' '}
          </a>
          <a
            id="01:16:39.572"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4599, '01:16:39.572')}
          >
            Okay, so vitamin D3,{' '}
          </a>
          <a
            id="01:16:41.252"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4601, '01:16:41.252')}
          >
            I'm guessing you're talking about vitamin D3 specifically{' '}
          </a>
          <a
            id="01:16:43.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4603, '01:16:43.412')}
          >
            when you say vitamin D,{' '}
          </a>
          <a
            id="01:16:44.892"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4604, '01:16:44.892')}
          >
            and then boron, five to 12 milligrams per day, right?{' '}
          </a>
          <a
            id="01:16:49.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4609, '01:16:49.012')}
          >
            And then what are some of the other things{' '}
          </a>
          <a
            id="01:16:50.652"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4610, '01:16:50.652')}
          >
            to optimize testosterone that are in supplement form?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:16:55.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4615, '01:16:55.244')}
          >
            We could talk about things that affect the steroidogenesis cascade,{' '}
          </a>
          <a
            id="01:16:58.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4618, '01:16:58.244')}
          >
            so we could touch on Tongkat Ali.{' '}
          </a>
          <a
            id="01:17:00.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4620, '01:17:00.244')}
          >
            We talked about that a little bit before.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:17:01.319"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4621, '01:17:01.319')}
          >
            Yeah, but I'm guessing a number of people probably haven't heard that conversation.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:17:05.116"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4625, '01:17:05.116')}
          >
            also known as long jack and that up-regulates several different enzymes{' '}
          </a>
          <a
            id="01:17:09.716"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4629, '01:17:09.716')}
          >
            in this steroidogenesis cascade.{' '}
          </a>
          <a
            id="01:17:12.156"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4632, '01:17:12.156')}
          >
            And by that, what you mean is, and this is another good thing to Google,{' '}
          </a>
          <a
            id="01:17:16.196"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4636, '01:17:16.196')}
          >
            I think anybody interested in hormone optimization{' '}
          </a>
          <a
            id="01:17:18.396"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4638, '01:17:18.396')}
          >
            should understand where sterol hormones come from.{' '}
          </a>
          <a
            id="01:17:22.316"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4642, '01:17:22.316')}
          >
            They come usually from cholesterol{' '}
          </a>
          <a
            id="01:17:24.556"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4644, '01:17:24.556')}
          >
            and they can be shunted off to vitamin D very easily.{' '}
          </a>
          <a
            id="01:17:27.396"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4647, '01:17:27.396')}
          >
            They can be shunted off to testosterone or estrogens{' '}
          </a>
          <a
            id="01:17:30.596"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4650, '01:17:30.596')}
          >
            or progestogens quite easily as well.{' '}
          </a>
          <a
            id="01:17:33.636"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4653, '01:17:33.636')}
          >
            But Toncat helps with the conversion of multiple key steps{' '}
          </a>
          <a
            id="01:17:38.876"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4658, '01:17:38.876')}
          >
            where you synthesize testosterone.{' '}
          </a>
          <a
            id="01:17:41.676"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4661, '01:17:41.676')}
          >
            Another, think of it as like a co-enzyme or a co-factor,{' '}
          </a>
          <a
            id="01:17:45.996"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4665, '01:17:45.996')}
          >
            an up-regulator of these steps is insulin and IGF-1.{' '}
          </a>
          <a
            id="01:17:50.756"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4670, '01:17:50.756')}
          >
            So a good rule of thumb is,{' '}
          </a>
          <a
            id="01:17:52.796"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4672, '01:17:52.796')}
          >
            if you are not expecting as much growth hormone, insulin and IGF-1,{' '}
          </a>
          <a
            id="01:17:57.076"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4677, '01:17:57.076')}
          >
            for example, lower carb diets, caloric deficits,{' '}
          </a>
          <a
            id="01:18:00.916"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4680, '01:18:00.916')}
          >
            you're trying to cut body fat or body weight,{' '}
          </a>
          <a
            id="01:18:03.716"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4683, '01:18:03.716')}
          >
            then Toncat is going to be theoretically especially powerful.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:18:09.089"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4689, '01:18:09.089')}
          >
            What sorts of dosages of Tonga do you recommend to your patients?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:18:13.105"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4693, '01:18:13.105')}
          >
            Anywhere from 300 to 1,200 milligrams a day with Toncat,{' '}
          </a>
          <a
            id="01:18:18.185"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4698, '01:18:18.185')}
          >
            you need to be careful with the standardization{' '}
          </a>
          <a
            id="01:18:21.545"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4701, '01:18:21.545')}
          >
            because if you're thinking about{' '}
          </a>
          <a
            id="01:18:23.625"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4703, '01:18:23.625')}
          >
            a general Toncat supplement,{' '}
          </a>
          <a
            id="01:18:25.005"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4705, '01:18:25.005')}
          >
            which is by far the most well-studied,{' '}
          </a>
          <a
            id="01:18:27.625"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4707, '01:18:27.625')}
          >
            then you're looking at the uricomonone content,{' '}
          </a>
          <a
            id="01:18:32.105"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4712, '01:18:32.105')}
          >
            which is a plant compound{' '}
          </a>
          <a
            id="01:18:33.945"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4713, '01:18:33.945')}
          >
            that is likely the main active pharmacologic effect.{' '}
          </a>
          <a
            id="01:18:38.185"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4718, '01:18:38.185')}
          >
            So that's the compound that's having the effect on the body.{' '}
          </a>
          <a
            id="01:18:41.465"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4721, '01:18:41.465')}
          >
            And if you standardize the uricomonone very, very high,{' '}
          </a>
          <a
            id="01:18:45.905"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4725, '01:18:45.905')}
          >
            then theoretically you're having more effect at a lower dose.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:18:48.948"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4728, '01:18:48.948')}
          >
            I take 400 milligrams of Tonga Ali per day.{' '}
          </a>
          <a
            id="01:18:52.988"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4732, '01:18:52.988')}
          >
            I take it early in the day{' '}
          </a>
          <a
            id="01:18:53.988"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4733, '01:18:53.988')}
          >
            because it has a bit of a stimulant effect.{' '}
          </a>
          <a
            id="01:18:55.708"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4735, '01:18:55.708')}
          >
            And if I take it after 2 p.m.{' '}
          </a>
          <a
            id="01:18:57.248"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4737, '01:18:57.248')}
          >
            it starts to inhibit my sleep.{' '}
          </a>
          <a
            id="01:18:59.568"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4739, '01:18:59.568')}
          >
            I've been taking it for years{' '}
          </a>
          <a
            id="01:19:01.828"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4741, '01:19:01.828')}
          >
            and I rather like the effects.{' '}
          </a>
          <a
            id="01:19:05.027"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4745, '01:19:05.027')}
          >
            It seems subtle, but consistent.{' '}
          </a>
          <a
            id="01:19:07.428"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4747, '01:19:07.428')}
          >
            I've never cycled it.{' '}
          </a>
          <a
            id="01:19:09.388"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4749, '01:19:09.388')}
          >
            Do you recommend cycling it?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:19:11.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4751, '01:19:11.324')}
          >
            I don't see any reason to cycle it.{' '}
          </a>
          <a
            id="01:19:13.404"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4753, '01:19:13.404')}
          >
            There is a reason to cycle some supplements,{' '}
          </a>
          <a
            id="01:19:17.604"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4757, '01:19:17.604')}
          >
            but no reason to cycle Tonka.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:19:19.677"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4759, '01:19:19.677')}
          >
            My blood work tells me that it causes an increase in free testosterone for me and also a
            slight{' '}
          </a>
          <a
            id="01:19:24.877"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4764, '01:19:24.877')}
          >
            increase in luteinizing hormone for me. What are some of the other effects on various
            hormones{' '}
          </a>
          <a
            id="01:19:30.157"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4770, '01:19:30.157')}
          >
            that you've observed in the blood work of your patients taking Tonga Ali?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:19:34.831"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4774, '01:19:34.831')}
          >
            Tongkat can also slightly increase DHEA, and if you have a very high SHBG, again that's{' '}
          </a>
          <a
            id="01:19:41.631"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4781, '01:19:41.631')}
          >
            the protein that binds up your androgens and estrogens, an extremely important protein.{' '}
          </a>
          <a
            id="01:19:47.651"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4787, '01:19:47.651')}
          >
            The higher your SHBG, the more it helps decrease it.{' '}
          </a>
          <a
            id="01:19:51.331"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4791, '01:19:51.331')}
          >
            So they've studied Tongkat in populations with very normal SHBGs, and it does nothing{' '}
          </a>
          <a
            id="01:19:57.091"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4797, '01:19:57.091')}
          >
            for SHBG.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:19:58.929"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4798, '01:19:58.929')}
          >
            Interesting. Does that mean it does nothing for somebody overall? So if somebody has
            SHBG{' '}
          </a>
          <a
            id="01:20:03.489"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4803, '01:20:03.489')}
          >
            that's in the normal range, will taking Tongat benefit them in any other way?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:20:08.159"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4808, '01:20:08.159')}
          >
            Yes, it'll increase their total and free testosterone.{' '}
          </a>
          <a
            id="01:20:12.139"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4812, '01:20:12.139')}
          >
            Got it.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:20:12.445"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4812, '01:20:12.445')}
          >
            But okay, is it known to have effects on anything else{' '}
          </a>
          <a
            id="01:20:16.245"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4816, '01:20:16.245')}
          >
            like thyroid hormone, growth hormone,{' '}
          </a>
          <a
            id="01:20:18.005"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4818, '01:20:18.005')}
          >
            or is it purely in these steroid synthesis pathways?{' '}
          </a>
          <a
            id="01:20:21.245"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4821, '01:20:21.245')}
          >
            Or steroid, I should say, synthesis and receptor{' '}
          </a>
          <a
            id="01:20:24.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4824, '01:20:24.165')}
          >
            and modulation pathways?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:20:25.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4825, '01:20:25.439')}
          >
            There's no direct effect on those pathways.{' '}
          </a>
          <a
            id="01:20:28.279"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4828, '01:20:28.279')}
          >
            However, anytime you alter your free androgen{' '}
          </a>
          <a
            id="01:20:32.199"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4832, '01:20:32.199')}
          >
            or free estrogen, particularly one{' '}
          </a>
          <a
            id="01:20:35.879"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4835, '01:20:35.879')}
          >
            without altering the other,{' '}
          </a>
          <a
            id="01:20:37.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4837, '01:20:37.619')}
          >
            it will alter the binding protein{' '}
          </a>
          <a
            id="01:20:39.279"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4839, '01:20:39.279')}
          >
            that binds thyroid hormones.{' '}
          </a>
          <a
            id="01:20:41.039"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4841, '01:20:41.039')}
          >
            So any change you make,{' '}
          </a>
          <a
            id="01:20:42.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4842, '01:20:42.719')}
          >
            whether it's natural optimization or hormone replacement,{' '}
          </a>
          <a
            id="01:20:45.919"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4845, '01:20:45.919')}
          >
            you're going to slightly skew your thyroid hormone profile.{' '}
          </a>
          <a
            id="01:20:49.199"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4849, '01:20:49.199')}
          >
            One common actionable example of this{' '}
          </a>
          <a
            id="01:20:51.659"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4851, '01:20:51.659')}
          >
            that I see often clinically{' '}
          </a>
          <a
            id="01:20:53.799"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4853, '01:20:53.799')}
          >
            is someone starts, let's say,{' '}
          </a>
          <a
            id="01:20:56.679"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4856, '01:20:56.679')}
          >
            estrogen replacement or testosterone replacement.{' '}
          </a>
          <a
            id="01:20:59.399"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4859, '01:20:59.399')}
          >
            Maybe they're taking AI with their testosterone replacement.{' '}
          </a>
          <a
            id="01:21:02.279"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4862, '01:21:02.279')}
          >
            Aromatase inhibitor.{' '}
          </a>
          <a
            id="01:21:04.239"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4864, '01:21:04.239')}
          >
            Correct, an aromatase inhibitor,{' '}
          </a>
          <a
            id="01:21:05.459"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4865, '01:21:05.459')}
          >
            which blocks the conversion to estrogen.{' '}
          </a>
          <a
            id="01:21:07.879"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4867, '01:21:07.879')}
          >
            If they're taking testosterone{' '}
          </a>
          <a
            id="01:21:09.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4869, '01:21:09.719')}
          >
            and they have very little estrogen,{' '}
          </a>
          <a
            id="01:21:12.479"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4872, '01:21:12.479')}
          >
            then you're going to decrease the binding protein,{' '}
          </a>
          <a
            id="01:21:15.319"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4875, '01:21:15.319')}
          >
            also known as thyroxine binding globulin,{' '}
          </a>
          <a
            id="01:21:17.959"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4877, '01:21:17.959')}
          >
            which binds active thyroid hormones.{' '}
          </a>
          <a
            id="01:21:20.599"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4880, '01:21:20.599')}
          >
            So if you start TRT{' '}
          </a>
          <a
            id="01:21:24.079"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4884, '01:21:24.079')}
          >
            and you either have low aromatase activity{' '}
          </a>
          <a
            id="01:21:26.559"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4886, '01:21:26.559')}
          >
            or no aromatase activity, no conversion to estrogen,{' '}
          </a>
          <a
            id="01:21:30.318"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4890, '01:21:30.318')}
          >
            then your free thyroid hormones will go up.{' '}
          </a>
          <a
            id="01:21:33.339"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4893, '01:21:33.339')}
          >
            Even just acutely, usually feedback inhibition,{' '}
          </a>
          <a
            id="01:21:36.699"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4896, '01:21:36.699')}
          >
            which is how the body talks to itself and says,{' '}
          </a>
          <a
            id="01:21:39.879"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4899, '01:21:39.879')}
          >
            we need to make more of this or less of this.{' '}
          </a>
          <a
            id="01:21:42.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4902, '01:21:42.439')}
          >
            But acutely, there's not always enough time.{' '}
          </a>
          <a
            id="01:21:46.119"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4906, '01:21:46.119')}
          >
            You're going to have very high thyroid hormones{' '}
          </a>
          <a
            id="01:21:49.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4909, '01:21:49.439')}
          >
            and you can have tachycardia, which is a fast heart rate,{' '}
          </a>
          <a
            id="01:21:52.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4912, '01:21:52.759')}
          >
            or you can feel kind of like overly fight or flight{' '}
          </a>
          <a
            id="01:21:55.499"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4915, '01:21:55.499')}
          >
            due to increased thyroid hormone activity in the end tissue.{' '}
          </a>
          <a
            id="01:21:59.519"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4919, '01:21:59.519')}
          >
            Thank you very much for your time, and I'll see you next time.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:21:59.635"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4919, '01:21:59.635')}
          >
            Interesting.{' '}
          </a>
          <a
            id="01:22:00.595"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4920, '01:22:00.595')}
          >
            Okay, so Tongali, that's a broad range,{' '}
          </a>
          <a
            id="01:22:03.075"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4923, '01:22:03.075')}
          >
            300 to 1,200 milligrams per day,{' '}
          </a>
          <a
            id="01:22:05.115"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4925, '01:22:05.115')}
          >
            and I realized that the source matters there.{' '}
          </a>
          <a
            id="01:22:08.315"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4928, '01:22:08.315')}
          >
            What are some of the other hormones{' '}
          </a>
          <a
            id="01:22:10.295"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4930, '01:22:10.295')}
          >
            that you prescribe to your patients{' '}
          </a>
          <a
            id="01:22:13.155"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4933, '01:22:13.155')}
          >
            who do not want to go on testosterone replacement therapy{' '}
          </a>
          <a
            id="01:22:16.235"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4936, '01:22:16.235')}
          >
            or take exogenous DHEA or anything like that?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:22:20.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4940, '01:22:20.324')}
          >
            We can talk about Phytogia next.{' '}
          </a>
          <a
            id="01:22:22.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4942, '01:22:22.324')}
          >
            Phytogia is interesting because it's a genus of plants.{' '}
          </a>
          <a
            id="01:22:25.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4945, '01:22:25.324')}
          >
            Phytogia agrestis is one of them.{' '}
          </a>
          <a
            id="01:22:27.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4947, '01:22:27.324')}
          >
            There's many others that are very interesting.{' '}
          </a>
          <a
            id="01:22:30.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4950, '01:22:30.324')}
          >
            That species is likely the most well-studied, and it will increase LH.{' '}
          </a>
          <a
            id="01:22:35.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4955, '01:22:35.324')}
          >
            I would not consider it an LH memetic, so it doesn't really mimic it,{' '}
          </a>
          <a
            id="01:22:40.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4960, '01:22:40.324')}
          >
            but it increases the release of luteinizing hormone from the pituitary.{' '}
          </a>
          <a
            id="01:22:43.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4963, '01:22:43.324')}
          >
            That's a hormone that binds to the leydig cell, to the LH receptor,{' '}
          </a>
          <a
            id="01:22:47.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4967, '01:22:47.324')}
          >
            kind of like HCG does.{' '}
          </a>
          <a
            id="01:22:49.324"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4969, '01:22:49.324')}
          >
            It will increase the release of testosterone.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:22:53.298"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4973, '01:22:53.298')}
          >
            I see, so I think for people that aren't familiar with HCG,{' '}
          </a>
          <a
            id="01:22:56.438"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4976, '01:22:56.438')}
          >
            so human chorionic gonadotropin{' '}
          </a>
          <a
            id="01:22:58.138"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4978, '01:22:58.138')}
          >
            is basically synthetic luteinizing hormone,{' '}
          </a>
          <a
            id="01:23:00.418"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4980, '01:23:00.418')}
          >
            and luteinizing hormone is the hormone{' '}
          </a>
          <a
            id="01:23:01.778"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4981, '01:23:01.778')}
          >
            released from the pituitary{' '}
          </a>
          <a
            id="01:23:02.898"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4982, '01:23:02.898')}
          >
            that is going to travel down to the testes{' '}
          </a>
          <a
            id="01:23:05.058"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4985, '01:23:05.058')}
          >
            to stimulate the production of sperm and testosterone,{' '}
          </a>
          <a
            id="01:23:08.518"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4988, '01:23:08.518')}
          >
            but mainly testosterone, is that correct?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:23:10.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4990, '01:23:10.510')}
          >
            I'm mostly correct.{' '}
          </a>
          <a
            id="01:23:12.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4992, '01:23:12.510')}
          >
            Technically, synthetic LH is also known as little R LH or recombinant LH.{' '}
          </a>
          <a
            id="01:23:17.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(4997, '01:23:17.510')}
          >
            And HCG can be synthetic,{' '}
          </a>
          <a
            id="01:23:20.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5000, '01:23:20.510')}
          >
            but often it is just refined from the urine of pregnant ladies{' '}
          </a>
          <a
            id="01:23:24.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5004, '01:23:24.510')}
          >
            since the placenta makes it.{' '}
          </a>
          <a
            id="01:23:27.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5007, '01:23:27.510')}
          >
            That's why it's called chorionic gonadotropin.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:23:30.862"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5010, '01:23:30.862')}
          >
            So where are they getting all this pregnant women's urine?{' '}
          </a>
          <a
            id="01:23:35.022"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5015, '01:23:35.022')}
          >
            I mean, is, I mean, is there a location?{' '}
          </a>
          <a
            id="01:23:37.982"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5017, '01:23:37.982')}
          >
            I mean, not that I want to go there.{' '}
          </a>
          <a
            id="01:23:38.822"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5018, '01:23:38.822')}
          >
            Donation, yeah.{' '}
          </a>
          <a
            id="01:23:40.142"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5020, '01:23:40.142')}
          >
            Really, so they're women-{' '}
          </a>
          <a
            id="01:23:40.982"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5020, '01:23:40.982')}
          >
            First trimester pregnant ladies, it's very high.{' '}
          </a>
          <a
            id="01:23:43.462"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5023, '01:23:43.462')}
          >
            Donating their urine, and then they're purifying it,{' '}
          </a>
          <a
            id="01:23:46.982"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5026, '01:23:46.982')}
          >
            and then men are injecting it.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:23:37.966"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5017, '01:23:37.966')}
          >
            You{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:23:38.725"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5018, '01:23:38.725')}
          >
            Go there.{' '}
          </a>
          <a
            id="01:23:39.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5019, '01:23:39.565')}
          >
            Yeah.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:23:40.919"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5020, '01:23:40.919')}
          >
            I'm the first tribe.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:23:49.002"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5029, '01:23:49.002')}
          >
            Yes. Wow.{' '}
          </a>
          <a
            id="01:23:50.602"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5030, '01:23:50.602')}
          >
            And that's actually the same for menopausal ladies.{' '}
          </a>
          <a
            id="01:23:53.162"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5033, '01:23:53.162')}
          >
            So first trimester pregnant ladies,{' '}
          </a>
          <a
            id="01:23:55.242"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5035, '01:23:55.242')}
          >
            that's how you can make, you know, non-synthetic HCG.{' '}
          </a>
          <a
            id="01:24:00.522"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5040, '01:24:00.522')}
          >
            And then for minotropins, which are also known,{' '}
          </a>
          <a
            id="01:24:04.122"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5044, '01:24:04.122')}
          >
            there's a couple of different names for it, like Minopure.{' '}
          </a>
          <a
            id="01:24:07.502"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5047, '01:24:07.502')}
          >
            You have menopausal ladies that have very high LH and FSH,{' '}
          </a>
          <a
            id="01:24:10.682"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5050, '01:24:10.682')}
          >
            and then you refine the FSH and LH.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:24:12.948"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5052, '01:24:12.948')}
          >
            Okay, so moving away from the sources and from urine,{' '}
          </a>
          <a
            id="01:24:18.868"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5058, '01:24:18.868')}
          >
            Fidogia agrestis, what dosages do you have patients take?{' '}
          </a>
          <a
            id="01:24:23.048"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5063, '01:24:23.048')}
          >
            I've heard of some potential toxicity{' '}
          </a>
          <a
            id="01:24:25.988"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5065, '01:24:25.988')}
          >
            to the testicular cells.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:24:27.562"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5067, '01:24:27.562')}
          >
            There is one study, and this is a rat study,{' '}
          </a>
          <a
            id="01:24:30.022"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5070, '01:24:30.022')}
          >
            but you can equate the dose of toxicity in rats and humans.{' '}
          </a>
          <a
            id="01:24:34.062"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5074, '01:24:34.062')}
          >
            They did not give these rats any antioxidants,{' '}
          </a>
          <a
            id="01:24:37.022"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5077, '01:24:37.022')}
          >
            but it increases a couple different{' '}
          </a>
          <a
            id="01:24:40.182"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5080, '01:24:40.182')}
          >
            like pro-inflammatory markers.{' '}
          </a>
          <a
            id="01:24:41.902"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5081, '01:24:41.902')}
          >
            One is GGT or gamma-glutamyl transferase,{' '}
          </a>
          <a
            id="01:24:45.102"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5085, '01:24:45.102')}
          >
            comes from both the testes and the liver,{' '}
          </a>
          <a
            id="01:24:46.862"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5086, '01:24:46.862')}
          >
            and one is alkaline phosphatase,{' '}
          </a>
          <a
            id="01:24:48.902"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5088, '01:24:48.902')}
          >
            also known as ALKFOS, again, coming from both areas.{' '}
          </a>
          <a
            id="01:24:52.742"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5092, '01:24:52.742')}
          >
            There are several different ways{' '}
          </a>
          <a
            id="01:24:53.822"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5093, '01:24:53.822')}
          >
            that you can attenuate this increase,{' '}
          </a>
          <a
            id="01:24:55.582"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5095, '01:24:55.582')}
          >
            and you can also just check to see if you have increased.{' '}
          </a>
          <a
            id="01:24:58.622"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5098, '01:24:58.622')}
          >
            In the rat dose that equates with humans{' '}
          </a>
          <a
            id="01:25:01.342"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5101, '01:25:01.342')}
          >
            that had no effect, so the safe dose,{' '}
          </a>
          <a
            id="01:25:03.942"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5103, '01:25:03.942')}
          >
            was an average of 300 milligrams a day.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:25:06.644"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5106, '01:25:06.644')}
          >
            So that would be 300 milligrams a day in humans is the dosage that did not have
            toxicity, correct?{' '}
          </a>
          <a
            id="01:25:13.124"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5113, '01:25:13.124')}
          >
            Correct.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:25:13.546"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5113, '01:25:13.546')}
          >
            And often, even if there is toxicity in rats,{' '}
          </a>
          <a
            id="01:25:17.666"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5117, '01:25:17.666')}
          >
            there is not toxicity in humans,{' '}
          </a>
          <a
            id="01:25:19.226"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5119, '01:25:19.226')}
          >
            so it's not directly equitable.{' '}
          </a>
          <a
            id="01:25:21.266"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5121, '01:25:21.266')}
          >
            But to be safe, another regimen that I have people take{' '}
          </a>
          <a
            id="01:25:25.186"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5125, '01:25:25.186')}
          >
            is 600 milligrams every other day{' '}
          </a>
          <a
            id="01:25:27.386"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5127, '01:25:27.386')}
          >
            or 600 milligrams three times a week,{' '}
          </a>
          <a
            id="01:25:29.906"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5129, '01:25:29.906')}
          >
            often Monday, Wednesday, Friday.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:25:31.501"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5131, '01:25:31.501')}
          >
            This is very interesting and relevant{' '}
          </a>
          <a
            id="01:25:34.181"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5134, '01:25:34.181')}
          >
            because I've been taking Fidogia for some period of time.{' '}
          </a>
          <a
            id="01:25:37.481"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5137, '01:25:37.481')}
          >
            All my markers and tests indicate that there's no toxicity,{' '}
          </a>
          <a
            id="01:25:41.701"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5141, '01:25:41.701')}
          >
            but I've been taking 600 milligrams per day,{' '}
          </a>
          <a
            id="01:25:45.341"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5145, '01:25:45.341')}
          >
            but I've been cycling it for about eight to 12 weeks on,{' '}
          </a>
          <a
            id="01:25:49.221"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5149, '01:25:49.221')}
          >
            and then a few weeks off.{' '}
          </a>
          <a
            id="01:25:50.621"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5150, '01:25:50.621')}
          >
            But based on what you're saying,{' '}
          </a>
          <a
            id="01:25:51.941"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5151, '01:25:51.941')}
          >
            I'm thinking maybe three times per week{' '}
          </a>
          <a
            id="01:25:53.781"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5153, '01:25:53.781')}
          >
            or every other day might be better.{' '}
          </a>
          <a
            id="01:25:55.501"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5155, '01:25:55.501')}
          >
            Is that right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:25:51.059"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5151, '01:25:51.059')}
          >
            based on what you're saying.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:25:56.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5156, '01:25:56.560')}
          >
            If you weren't gonna get any labs,{' '}
          </a>
          <a
            id="01:25:58.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5158, '01:25:58.480')}
          >
            that is certainly the regimen that you want.{' '}
          </a>
          <a
            id="01:26:00.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5160, '01:26:00.400')}
          >
            If you're gonna check your GGT and ALK-FOS{' '}
          </a>
          <a
            id="01:26:03.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5163, '01:26:03.400')}
          >
            or even take other things to prevent those from increasing,{' '}
          </a>
          <a
            id="01:26:06.840"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5166, '01:26:06.840')}
          >
            then you can certainly be more aggressive{' '}
          </a>
          <a
            id="01:26:09.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5169, '01:26:09.700')}
          >
            with your fiducia dosing.{' '}
          </a>
          <a
            id="01:26:11.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5171, '01:26:11.940')}
          >
            You can increase it quite a bit{' '}
          </a>
          <a
            id="01:26:13.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5173, '01:26:13.520')}
          >
            and it has a dose-dependent response{' '}
          </a>
          <a
            id="01:26:16.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5176, '01:26:16.240')}
          >
            in both the activities associated with high testosterone{' '}
          </a>
          <a
            id="01:26:18.960"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5178, '01:26:18.960')}
          >
            and also just LH and testosterone.{' '}
          </a>
          <a
            id="01:26:22.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5182, '01:26:22.240')}
          >
            So the more aggressive regimen would be 600 milligrams daily{' '}
          </a>
          <a
            id="01:26:26.060"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5186, '01:26:26.060')}
          >
            for a month and then take one to two weeks off.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:26:28.690"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5188, '01:26:28.690')}
          >
            Great, I think that's more or less what I've been doing.{' '}
          </a>
          <a
            id="01:26:32.490"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5192, '01:26:32.490')}
          >
            Okay, terrific.{' '}
          </a>
          <a
            id="01:26:33.890"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5193, '01:26:33.890')}
          >
            In terms of other hormones,{' '}
          </a>
          <a
            id="01:26:35.410"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5195, '01:26:35.410')}
          >
            what are some of the supplements{' '}
          </a>
          <a
            id="01:26:36.530"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5196, '01:26:36.530')}
          >
            that can support growth hormone, right?{' '}
          </a>
          <a
            id="01:26:38.730"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5198, '01:26:38.730')}
          >
            A hormone that's associated with tissue repair{' '}
          </a>
          <a
            id="01:26:40.850"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5200, '01:26:40.850')}
          >
            and in some cases, metabolism and fat loss.{' '}
          </a>
          <a
            id="01:26:43.890"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5203, '01:26:43.890')}
          >
            What are some of the tools,{' '}
          </a>
          <a
            id="01:26:45.770"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5205, '01:26:45.770')}
          >
            nutritional and or supplement based,{' '}
          </a>
          <a
            id="01:26:48.050"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5208, '01:26:48.050')}
          >
            one can do to tap on the growth hormone pathway{' '}
          </a>
          <a
            id="01:26:52.290"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5212, '01:26:52.290')}
          >
            and let's lump IGF-1 in there too,{' '}
          </a>
          <a
            id="01:26:54.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5214, '01:26:54.350')}
          >
            since they're essentially working along the same dimensions.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:26:57.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5217, '01:26:57.800')}
          >
            A quick synopsis, growth hormone is a peptide hormone{' '}
          </a>
          <a
            id="01:27:00.840"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5220, '01:27:00.840')}
          >
            and it is released by the pituitary.{' '}
          </a>
          <a
            id="01:27:04.280"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5224, '01:27:04.280')}
          >
            There's growth hormone releasing hormone{' '}
          </a>
          <a
            id="01:27:06.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5226, '01:27:06.520')}
          >
            and ghrelin that stimulate the release.{' '}
          </a>
          <a
            id="01:27:08.440"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5228, '01:27:08.440')}
          >
            So there's also peptides that are very analogous{' '}
          </a>
          <a
            id="01:27:11.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5231, '01:27:11.400')}
          >
            to these two things.{' '}
          </a>
          <a
            id="01:27:13.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5233, '01:27:13.400')}
          >
            You have that pulsatile secretion of growth hormone{' '}
          </a>
          <a
            id="01:27:16.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5236, '01:27:16.480')}
          >
            in a very fast half-life of just minutes{' '}
          </a>
          <a
            id="01:27:18.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5238, '01:27:18.520')}
          >
            and then it increases IGF-1.{' '}
          </a>
          <a
            id="01:27:20.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5240, '01:27:20.820')}
          >
            There is both peripheral IGF-1 and central IGF-1 and IGF-2{' '}
          </a>
          <a
            id="01:27:24.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5244, '01:27:24.480')}
          >
            but no need to get into the specifics.{' '}
          </a>
          <a
            id="01:27:26.580"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5246, '01:27:26.580')}
          >
            There is a happy medium to where your growth hormone{' '}
          </a>
          <a
            id="01:27:30.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5250, '01:27:30.900')}
          >
            is at a adequate level and your IGF-1 is an adequate level.{' '}
          </a>
          <a
            id="01:27:34.720"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5254, '01:27:34.720')}
          >
            Usually those two are congruent.{' '}
          </a>
          <a
            id="01:27:36.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5256, '01:27:36.540')}
          >
            So in most cases, we just check an IGF-1{' '}
          </a>
          <a
            id="01:27:39.620"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5259, '01:27:39.620')}
          >
            and occasionally the binding peptides for IGF-1{' '}
          </a>
          <a
            id="01:27:42.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5262, '01:27:42.500')}
          >
            kind of like SHBG that we talked about earlier{' '}
          </a>
          <a
            id="01:27:45.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5265, '01:27:45.260')}
          >
            but you're estimating a free IGF-1.{' '}
          </a>
          <a
            id="01:27:48.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5268, '01:27:48.700')}
          >
            It's kind of confusing because almost all hormones{' '}
          </a>
          <a
            id="01:27:52.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5272, '01:27:52.480')}
          >
            have binding proteins to help regulate them{' '}
          </a>
          <a
            id="01:27:55.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5275, '01:27:55.480')}
          >
            but often you wanna look at free testosterone,{' '}
          </a>
          <a
            id="01:27:57.660"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5277, '01:27:57.660')}
          >
            free estradiol, free IGF-1 or at least estimate it,{' '}
          </a>
          <a
            id="01:28:01.580"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5281, '01:28:01.580')}
          >
            free cortisol even and free thyroid hormone.{' '}
          </a>
          <a
            id="01:28:05.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5285, '01:28:05.820')}
          >
            But when you're talking about growth hormone and IGF-1,{' '}
          </a>
          <a
            id="01:28:10.580"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5290, '01:28:10.580')}
          >
            usually you don't need to do anything to optimize it.{' '}
          </a>
          <a
            id="01:28:14.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5294, '01:28:14.240')}
          >
            If you are a diabetic,{' '}
          </a>
          <a
            id="01:28:17.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5297, '01:28:17.460')}
          >
            then depending on the type of diabetes,{' '}
          </a>
          <a
            id="01:28:19.760"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5299, '01:28:19.760')}
          >
            your IGF-1 and growth hormone can be too high.{' '}
          </a>
          <a
            id="01:28:23.560"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5303, '01:28:23.560')}
          >
            Specifically in type 1 diabetes,{' '}
          </a>
          <a
            id="01:28:25.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5305, '01:28:25.780')}
          >
            your growth hormone is extremely high but your IGF-1 is low.{' '}
          </a>
          <a
            id="01:28:29.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5309, '01:28:29.980')}
          >
            So if you're in a dysregulated state or have pathology,{' '}
          </a>
          <a
            id="01:28:33.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5313, '01:28:33.020')}
          >
            I would just talk to your doctor{' '}
          </a>
          <a
            id="01:28:34.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5314, '01:28:34.180')}
          >
            about IGF-1 or growth hormone.{' '}
          </a>
          <a
            id="01:28:36.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5316, '01:28:36.420')}
          >
            Taking amino acids before you go to bed{' '}
          </a>
          <a
            id="01:28:39.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5319, '01:28:39.420')}
          >
            could potentially help with growth hormone release{' '}
          </a>
          <a
            id="01:28:42.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5322, '01:28:42.220')}
          >
            just because most growth hormone is released while you sleep.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:28:46.492"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5326, '01:28:46.492')}
          >
            I've heard that fasting can increase growth hormone and I know there are certain
            patterns{' '}
          </a>
          <a
            id="01:28:51.812"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5331, '01:28:51.812')}
          >
            of weight training that can increase growth hormone.{' '}
          </a>
          <a
            id="01:28:54.732"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5334, '01:28:54.732')}
          >
            Some of those regimens in the weight room that increase growth hormone have been covered{' '}
          </a>
          <a
            id="01:28:59.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5339, '01:28:59.412')}
          >
            by Dr. Duncan French, who is a guest on this podcast.{' '}
          </a>
          <a
            id="01:29:05.092"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5345, '01:29:05.092')}
          >
            So maybe we'll refer people to that episode for the specific protocols, these high
            volume{' '}
          </a>
          <a
            id="01:29:11.212"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5351, '01:29:11.212')}
          >
            training.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:29:12.192"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5352, '01:29:12.192')}
          >
            During those training exercises it usually does it transiently{' '}
          </a>
          <a
            id="01:29:15.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5355, '01:29:15.272')}
          >
            for a period of a few hours.{' '}
          </a>
          <a
            id="01:29:17.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5357, '01:29:17.632')}
          >
            And a lot of this IGF-1 is released by the muscle itself.{' '}
          </a>
          <a
            id="01:29:22.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5362, '01:29:22.672')}
          >
            So it's not necessarily released by the liver.{' '}
          </a>
          <a
            id="01:29:25.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5365, '01:29:25.392')}
          >
            IGF-1 that is released directly{' '}
          </a>
          <a
            id="01:29:27.912"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5367, '01:29:27.912')}
          >
            due to growth hormone signaling,{' '}
          </a>
          <a
            id="01:29:29.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5369, '01:29:29.312')}
          >
            usually the growth hormone comes from the pituitary{' '}
          </a>
          <a
            id="01:29:31.752"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5371, '01:29:31.752')}
          >
            and binds to the liver,{' '}
          </a>
          <a
            id="01:29:33.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5373, '01:29:33.392')}
          >
            where it usually has a half-life of about a week,{' '}
          </a>
          <a
            id="01:29:35.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5375, '01:29:35.832')}
          >
            where the paracrine or autocrine,{' '}
          </a>
          <a
            id="01:29:37.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5377, '01:29:37.592')}
          >
            think of it as like the peripherally acting{' '}
          </a>
          <a
            id="01:29:39.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5379, '01:29:39.832')}
          >
            or acting in the muscles itself,{' '}
          </a>
          <a
            id="01:29:41.472"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5381, '01:29:41.472')}
          >
            which is also helpful,{' '}
          </a>
          <a
            id="01:29:43.632"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5383, '01:29:43.632')}
          >
            is released and is not as concerning{' '}
          </a>
          <a
            id="01:29:47.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5387, '01:29:47.032')}
          >
            because it's not related to insulin resistance,{' '}
          </a>
          <a
            id="01:29:50.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5390, '01:29:50.672')}
          >
            but it is related to the training itself.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:29:53.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5393, '01:29:53.300')}
          >
            So fasting and growth hormone,{' '}
          </a>
          <a
            id="01:29:57.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5397, '01:29:57.100')}
          >
            is it true that fasting can increase growth hormone?{' '}
          </a>
          <a
            id="01:29:59.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5399, '01:29:59.700')}
          >
            And maybe as a little related tangent,{' '}
          </a>
          <a
            id="01:30:03.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5403, '01:30:03.540')}
          >
            I've heard that limiting food intake{' '}
          </a>
          <a
            id="01:30:05.340"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5405, '01:30:05.340')}
          >
            for the two hours before going to sleep{' '}
          </a>
          <a
            id="01:30:07.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5407, '01:30:07.140')}
          >
            can increase the pulse of growth hormone{' '}
          </a>
          <a
            id="01:30:08.860"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5408, '01:30:08.860')}
          >
            that one experiences during sleep.{' '}
          </a>
          <a
            id="01:30:10.660"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5410, '01:30:10.660')}
          >
            Of course, everyone gets a pulse of growth hormone{' '}
          </a>
          <a
            id="01:30:12.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5412, '01:30:12.220')}
          >
            during sleep, but especially carbohydrate laden meals{' '}
          </a>
          <a
            id="01:30:15.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5415, '01:30:15.400')}
          >
            can blunt that peak that occurs during sleep{' '}
          </a>
          <a
            id="01:30:18.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5418, '01:30:18.820')}
          >
            quite substantially.{' '}
          </a>
          <a
            id="01:30:19.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5419, '01:30:19.700')}
          >
            So two questions.{' '}
          </a>
          <a
            id="01:30:21.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5421, '01:30:21.900')}
          >
            Does avoiding food intake in the two hours prior to sleep{' '}
          </a>
          <a
            id="01:30:25.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5425, '01:30:25.980')}
          >
            help increase growth hormone release?{' '}
          </a>
          <a
            id="01:30:28.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5428, '01:30:28.140')}
          >
            Maybe it's being overly neurotic.{' '}
          </a>
          <a
            id="01:30:29.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5429, '01:30:29.460')}
          >
            Maybe people need to avoid food{' '}
          </a>
          <a
            id="01:30:31.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5431, '01:30:31.260')}
          >
            in the four hours before sleep.{' '}
          </a>
          <a
            id="01:30:33.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5433, '01:30:33.300')}
          >
            But regardless, what is the relationship{' '}
          </a>
          <a
            id="01:30:35.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5435, '01:30:35.780')}
          >
            between fasting and growth hormone release?{' '}
          </a>
          <a
            id="01:30:37.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5437, '01:30:37.460')}
          >
            I find this really interesting.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:30:38.812"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5438, '01:30:38.812')}
          >
            Fasting certainly potently increases growth hormone release.{' '}
          </a>
          <a
            id="01:30:43.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5443, '01:30:43.312')}
          >
            However, the end binding to the receptor is less sensitive.{' '}
          </a>
          <a
            id="01:30:49.432"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5449, '01:30:49.432')}
          >
            So although fasting does increase growth hormone,{' '}
          </a>
          <a
            id="01:30:53.432"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5453, '01:30:53.432')}
          >
            the genes that are downstream to it,{' '}
          </a>
          <a
            id="01:30:55.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5455, '01:30:55.832')}
          >
            both the growth hormone genes{' '}
          </a>
          <a
            id="01:30:57.232"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5457, '01:30:57.232')}
          >
            and IGF-1 related gene transcription activity{' '}
          </a>
          <a
            id="01:31:01.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5461, '01:31:01.952')}
          >
            will not be significantly higher.{' '}
          </a>
          <a
            id="01:31:04.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5464, '01:31:04.672')}
          >
            However, if you are optimizing the growth hormone{' '}
          </a>
          <a
            id="01:31:08.712"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5468, '01:31:08.712')}
          >
            that is released as pulsatile secretion,{' '}
          </a>
          <a
            id="01:31:12.432"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5472, '01:31:12.432')}
          >
            it is helpful to avoid eating for two hours.{' '}
          </a>
          <a
            id="01:31:15.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5475, '01:31:15.032')}
          >
            So the general rule of thumb is avoid eating{' '}
          </a>
          <a
            id="01:31:16.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5476, '01:31:16.832')}
          >
            about two hours before bed.{' '}
          </a>
          <a
            id="01:31:18.112"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5478, '01:31:18.112')}
          >
            I think that's clinically significant and helpful,{' '}
          </a>
          <a
            id="01:31:20.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5480, '01:31:20.672')}
          >
            but fasting otherwise specifically{' '}
          </a>
          <a
            id="01:31:22.792"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5482, '01:31:22.792')}
          >
            for growth hormone optimization{' '}
          </a>
          <a
            id="01:31:24.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5484, '01:31:24.592')}
          >
            and someone who already has normal growth hormone signaling{' '}
          </a>
          <a
            id="01:31:27.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5487, '01:31:27.992')}
          >
            is not helpful.{' '}
          </a>
          <a
            id="01:31:29.272"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5489, '01:31:29.272')}
          >
            Let's see.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:31:29.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5489, '01:31:29.757')}
          >
            extremely useful to hear,{' '}
          </a>
          <a
            id="01:31:32.117"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5492, '01:31:32.117')}
          >
            because one of the major reasons why people fast{' '}
          </a>
          <a
            id="01:31:34.637"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5494, '01:31:34.637')}
          >
            is to get that growth hormone increase.{' '}
          </a>
          <a
            id="01:31:35.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5495, '01:31:35.957')}
          >
            But if they're adjusting things on the back end{' '}
          </a>
          <a
            id="01:31:38.877"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5498, '01:31:38.877')}
          >
            that negate that, well then no such luck.{' '}
          </a>
          <a
            id="01:31:42.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5502, '01:31:42.957')}
          >
            Not that I have anything against fasting.{' '}
          </a>
          <a
            id="01:31:44.517"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5504, '01:31:44.517')}
          >
            I do a pseudo-intermittent fasting,{' '}
          </a>
          <a
            id="01:31:46.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5506, '01:31:46.437')}
          >
            mostly because I prefer to eat{' '}
          </a>
          <a
            id="01:31:48.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5508, '01:31:48.357')}
          >
            at fairly regular times of day.{' '}
          </a>
          <a
            id="01:31:51.157"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5511, '01:31:51.157')}
          >
            Okay, so it doesn't sound like there's a lot{' '}
          </a>
          <a
            id="01:31:52.677"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5512, '01:31:52.677')}
          >
            that people can take in supplement form{' '}
          </a>
          <a
            id="01:31:54.677"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5514, '01:31:54.677')}
          >
            to improve growth hormone.{' '}
          </a>
          <a
            id="01:31:55.797"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5515, '01:31:55.797')}
          >
            What about thyroid hormone?{' '}
          </a>
          <a
            id="01:31:56.837"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5516, '01:31:56.837')}
          >
            What are some of the things that people can take{' '}
          </a>
          <a
            id="01:31:58.617"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5518, '01:31:58.617')}
          >
            or do in order to make sure{' '}
          </a>
          <a
            id="01:32:00.317"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5520, '01:32:00.317')}
          >
            that their thyroid hormone levels are appropriate?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:32:04.419"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5524, '01:32:04.419')}
          >
            you wanna have a balance of iodine{' '}
          </a>
          <a
            id="01:32:06.499"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5526, '01:32:06.499')}
          >
            and you wanna have a good source of iodine.{' '}
          </a>
          <a
            id="01:32:08.179"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5528, '01:32:08.179')}
          >
            So there's some camps that say{' '}
          </a>
          <a
            id="01:32:09.819"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5529, '01:32:09.819')}
          >
            you should use a huge high dose of iodine{' '}
          </a>
          <a
            id="01:32:12.699"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5532, '01:32:12.699')}
          >
            and there's protocols for it.{' '}
          </a>
          <a
            id="01:32:14.259"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5534, '01:32:14.259')}
          >
            And there's some that say{' '}
          </a>
          <a
            id="01:32:15.259"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5535, '01:32:15.259')}
          >
            you should use just barely enough iodine.{' '}
          </a>
          <a
            id="01:32:17.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5537, '01:32:17.619')}
          >
            I believe it's like 200 micrograms per day,{' '}
          </a>
          <a
            id="01:32:20.379"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5540, '01:32:20.379')}
          >
            but you wanna balance.{' '}
          </a>
          <a
            id="01:32:22.259"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5542, '01:32:22.259')}
          >
            One of the things that I see that many people{' '}
          </a>
          <a
            id="01:32:24.859"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5544, '01:32:24.859')}
          >
            do not talk about when it comes to iodine and thyroid{' '}
          </a>
          <a
            id="01:32:28.659"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5548, '01:32:28.659')}
          >
            is there is compounds known as goitrogens.{' '}
          </a>
          <a
            id="01:32:31.579"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5551, '01:32:31.579')}
          >
            Or goitrogens.{' '}
          </a>
          <a
            id="01:32:33.219"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5553, '01:32:33.219')}
          >
            And these goitrogens are neither good nor evil,{' '}
          </a>
          <a
            id="01:32:36.179"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5556, '01:32:36.179')}
          >
            but they're actually kind of a nice check and balance.{' '}
          </a>
          <a
            id="01:32:39.499"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5559, '01:32:39.499')}
          >
            You need more iodine if you consume more goitrogens.{' '}
          </a>
          <a
            id="01:32:42.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5562, '01:32:42.619')}
          >
            And some examples of these{' '}
          </a>
          <a
            id="01:32:44.299"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5564, '01:32:44.299')}
          >
            are some of my favorite foods, cruciferous vegetables.{' '}
          </a>
          <a
            id="01:32:48.019"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5568, '01:32:48.019')}
          >
            Boron is also a goitrogen.{' '}
          </a>
          <a
            id="01:32:50.619"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5570, '01:32:50.619')}
          >
            So higher goitrogens, higher iodine.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:32:54.554"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5574, '01:32:54.554')}
          >
            So ingesting iodine containing salt is useful, yes or no?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:33:00.072"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5580, '01:33:00.072')}
          >
            Iodized salt does prevent goiter,{' '}
          </a>
          <a
            id="01:33:02.912"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5582, '01:33:02.912')}
          >
            but it is not necessarily the ideal form of iodine.{' '}
          </a>
          <a
            id="01:33:07.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5587, '01:33:07.032')}
          >
            Good forms of iodine often come from the ocean.{' '}
          </a>
          <a
            id="01:33:09.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5589, '01:33:09.672')}
          >
            If you look at a chart of hypothyroidism,{' '}
          </a>
          <a
            id="01:33:12.432"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5592, '01:33:12.432')}
          >
            there is a tendency to have more hypothyroidism{' '}
          </a>
          <a
            id="01:33:14.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5594, '01:33:14.992')}
          >
            the more inland you go.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:33:17.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5597, '01:33:17.217')}
          >
            So trying to eat some cruciferous vegetables each day{' '}
          </a>
          <a
            id="01:33:20.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5600, '01:33:20.897')}
          >
            would be the best way to improve thyroid function.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:33:23.495"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5603, '01:33:23.495')}
          >
            or a tumor?{' '}
          </a>
          <a
            id="01:33:24.335"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5604, '01:33:24.335')}
          >
            Along with plenty of iodine.{' '}
          </a>
          <a
            id="01:33:26.055"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5606, '01:33:26.055')}
          >
            You don't want too much iodine signaling.{' '}
          </a>
          <a
            id="01:33:27.975"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5607, '01:33:27.975')}
          >
            Many people are familiar with radioactive iodine tablets,{' '}
          </a>
          <a
            id="01:33:31.375"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5611, '01:33:31.375')}
          >
            and that's basically an extremely high amount of iodine{' '}
          </a>
          <a
            id="01:33:34.015"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5614, '01:33:34.015')}
          >
            to block out the radioactive iodine{' '}
          </a>
          <a
            id="01:33:38.215"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5618, '01:33:38.215')}
          >
            that comes from after, you know, like a nuclear meltdown or whatnot.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:33:42.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5622, '01:33:42.007')}
          >
            So we've got creatine, betaine, l-carnitine{' '}
          </a>
          <a
            id="01:33:47.047"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5627, '01:33:47.047')}
          >
            with allicin, garlic to offset the TMAO,{' '}
          </a>
          <a
            id="01:33:50.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5630, '01:33:50.567')}
          >
            vitamin D3, boron, tonga, ale, fedogia, some fasting.{' '}
          </a>
          <a
            id="01:33:56.207"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5636, '01:33:56.207')}
          >
            Love to talk to you about peptides.{' '}
          </a>
          <a
            id="01:33:58.127"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5638, '01:33:58.127')}
          >
            So I can imagine a hierarchy.{' '}
          </a>
          <a
            id="01:33:59.867"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5639, '01:33:59.867')}
          >
            The hierarchy starts with behaviors and nutrition.{' '}
          </a>
          <a
            id="01:34:03.487"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5643, '01:34:03.487')}
          >
            Behaviors, of course, includes training and limiting stress{' '}
          </a>
          <a
            id="01:34:05.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5645, '01:34:05.607')}
          >
            and all the things we talked about before,{' '}
          </a>
          <a
            id="01:34:08.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5648, '01:34:08.167')}
          >
            sunshine, et cetera, and optimized nutrition.{' '}
          </a>
          <a
            id="01:34:12.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5652, '01:34:12.407')}
          >
            Then we talked about supplements,{' '}
          </a>
          <a
            id="01:34:15.187"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5655, '01:34:15.187')}
          >
            all the things we just listed off to optimize testosterone.{' '}
          </a>
          <a
            id="01:34:18.967"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5658, '01:34:18.967')}
          >
            And we can get into this, but estrogen as well,{' '}
          </a>
          <a
            id="01:34:21.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5661, '01:34:21.567')}
          >
            which is important for libido and brain function{' '}
          </a>
          <a
            id="01:34:23.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5663, '01:34:23.527')}
          >
            and tissue function and joints feeling good, et cetera.{' '}
          </a>
          <a
            id="01:34:26.487"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5666, '01:34:26.487')}
          >
            But then we get into the realm where one might{' '}
          </a>
          <a
            id="01:34:29.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5669, '01:34:29.007')}
          >
            or could consider exogenous hormones,{' '}
          </a>
          <a
            id="01:34:31.647"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5671, '01:34:31.647')}
          >
            taking a small dose of testosterone{' '}
          </a>
          <a
            id="01:34:33.207"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5673, '01:34:33.207')}
          >
            or taking a small dose of GH even,{' '}
          </a>
          <a
            id="01:34:36.087"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5676, '01:34:36.087')}
          >
            if that were appropriate,{' '}
          </a>
          <a
            id="01:34:38.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5678, '01:34:38.007')}
          >
            and certainly only working with a doctor.{' '}
          </a>
          <a
            id="01:34:39.647"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5679, '01:34:39.647')}
          >
            But in between, there's a step of so-called peptides.{' '}
          </a>
          <a
            id="01:34:43.087"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5683, '01:34:43.087')}
          >
            And of course, there are many peptides.{' '}
          </a>
          <a
            id="01:34:44.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5684, '01:34:44.407')}
          >
            We've already talked about some of them,{' '}
          </a>
          <a
            id="01:34:45.847"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5685, '01:34:45.847')}
          >
            but when people talk about taking peptides,{' '}
          </a>
          <a
            id="01:34:47.447"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5687, '01:34:47.447')}
          >
            the ones that I hear most often about{' '}
          </a>
          <a
            id="01:34:49.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5689, '01:34:49.407')}
          >
            is a category that increases GH and IGF-1.{' '}
          </a>
          <a
            id="01:34:55.647"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5695, '01:34:55.647')}
          >
            And those, to my knowledge,{' '}
          </a>
          <a
            id="01:34:57.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5697, '01:34:57.927')}
          >
            go by the things like sermorelin,{' '}
          </a>
          <a
            id="01:35:00.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5700, '01:35:00.927')}
          >
            ipramorelin, tesamorelin,{' '}
          </a>
          <a
            id="01:35:02.967"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5702, '01:35:02.967')}
          >
            sort of a kit of things that taken separately{' '}
          </a>
          <a
            id="01:35:06.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5706, '01:35:06.567')}
          >
            or in combination to increase GH and IGF-1.{' '}
          </a>
          <a
            id="01:35:09.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5709, '01:35:09.567')}
          >
            But then other people, for instance,{' '}
          </a>
          <a
            id="01:35:11.046"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5711, '01:35:11.046')}
          >
            are taking peptides like BPC-157{' '}
          </a>
          <a
            id="01:35:14.287"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5714, '01:35:14.287')}
          >
            to try and improve tissue healing and recovery.{' '}
          </a>
          <a
            id="01:35:17.447"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5717, '01:35:17.447')}
          >
            There's a lot of interest in peptides.{' '}
          </a>
          <a
            id="01:35:19.927"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5719, '01:35:19.927')}
          >
            Please, if you would, tell us about what you know{' '}
          </a>
          <a
            id="01:35:22.766"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5722, '01:35:22.766')}
          >
            about the safety of peptides in terms of their sourcing{' '}
          </a>
          <a
            id="01:35:25.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5725, '01:35:25.727')}
          >
            and the utility of peptides.{' '}
          </a>
          <a
            id="01:35:27.486"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5727, '01:35:27.486')}
          >
            Is this something that people should consider{' '}
          </a>
          <a
            id="01:35:29.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5729, '01:35:29.607')}
          >
            before thinking about hormone replacement?{' '}
          </a>
          <a
            id="01:35:31.687"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5731, '01:35:31.687')}
          >
            Should people be wary of these things?{' '}
          </a>
          <a
            id="01:35:33.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5733, '01:35:33.567')}
          >
            I am very wary of particular sources{' '}
          </a>
          <a
            id="01:35:35.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5735, '01:35:35.607')}
          >
            that are sold online that are not clean.{' '}
          </a>
          <a
            id="01:35:37.887"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5737, '01:35:37.887')}
          >
            They contain contaminants and it could be dangerous.{' '}
          </a>
          <a
            id="01:35:40.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5740, '01:35:40.327')}
          >
            I really would love your thoughts on peptides.{' '}
          </a>
          <a
            id="01:35:42.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5742, '01:35:42.407')}
          >
            I'm just going to sit back and let you riff on peptides.{' '}
          </a>
          <a
            id="01:35:45.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5745, '01:35:45.727')}
          >
            But if you could touch on some of the ones that I mentioned,{' '}
          </a>
          <a
            id="01:35:47.807"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5747, '01:35:47.807')}
          >
            I'd be most grateful.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:35:49.919"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5749, '01:35:49.919')}
          >
            A peptide is just a chain of amino acids between two and a couple hundred in length.{' '}
          </a>
          <a
            id="01:35:55.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5755, '01:35:55.719')}
          >
            So I think of peptides as several different categories and the GHRPs that you mentioned,{' '}
          </a>
          <a
            id="01:36:01.959"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5761, '01:36:01.959')}
          >
            I would consider those and that stands for growth hormone-releasing peptide.{' '}
          </a>
          <a
            id="01:36:06.959"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5766, '01:36:06.959')}
          >
            You have two main types.{' '}
          </a>
          <a
            id="01:36:08.959"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5768, '01:36:08.959')}
          >
            The ghrelin agonist or they hit the ghrelin receptor and it helps release growth hormone{' '}
          </a>
          <a
            id="01:36:16.119"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5776, '01:36:16.119')}
          >
            because of that and then also the GHRH-like peptides.{' '}
          </a>
          <a
            id="01:36:21.999"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5781, '01:36:21.999')}
          >
            So they're very similar to growth hormone-releasing hormone.{' '}
          </a>
          <a
            id="01:36:24.839"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5784, '01:36:24.839')}
          >
            Often they just change a couple amino acids and it acts like that.{' '}
          </a>
          <a
            id="01:36:29.479"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5789, '01:36:29.479')}
          >
            Tessamoralin is one of them.{' '}
          </a>
          <a
            id="01:36:31.319"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5791, '01:36:31.319')}
          >
            Cermoralin is another one and CJC is another common one.{' '}
          </a>
          <a
            id="01:36:36.199"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5796, '01:36:36.199')}
          >
            I believe those are all in the class of GHRH-like peptides, whereas ipomorelin or
            ibutamorin,{' '}
          </a>
          <a
            id="01:36:43.039"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5803, '01:36:43.039')}
          >
            which is also known as MK-677, those two are in the class of ghrelin agonist.{' '}
          </a>
          <a
            id="01:36:48.719"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5808, '01:36:48.719')}
          >
            So they're more like they hit the receptor that ghrelin does, whereas the other ones{' '}
          </a>
          <a
            id="01:36:52.559"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5812, '01:36:52.559')}
          >
            hit the GHRH receptor.{' '}
          </a>
          <a
            id="01:36:54.559"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5814, '01:36:54.559')}
          >
            I think of GHRH-like peptides as being more like GHRH-like peptides, whereas the
            GHRH-like{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:36:54.770"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5814, '01:36:54.770')}
          >
            I think of ghrelin as making me hungry.{' '}
          </a>
          <a
            id="01:36:56.810"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5816, '01:36:56.810')}
          >
            Hungry and angry.{' '}
          </a>
          <a
            id="01:36:57.890"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5817, '01:36:57.890')}
          >
            Why would I want to take something{' '}
          </a>
          <a
            id="01:36:59.150"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5819, '01:36:59.150')}
          >
            that would increase ghrelin or signal?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:37:01.014"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5821, '01:37:01.014')}
          >
            Some people are trying to gain weight.{' '}
          </a>
          <a
            id="01:37:04.534"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5824, '01:37:04.534')}
          >
            It also does increase your growth hormone.{' '}
          </a>
          <a
            id="01:37:06.654"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5826, '01:37:06.654')}
          >
            So if your growth hormone is very low,{' '}
          </a>
          <a
            id="01:37:08.694"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5828, '01:37:08.694')}
          >
            you can consider it.{' '}
          </a>
          <a
            id="01:37:09.774"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5829, '01:37:09.774')}
          >
            Ibutamorin is a long-acting, so it has a long half-life,{' '}
          </a>
          <a
            id="01:37:13.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5833, '01:37:13.434')}
          >
            also known as MK-677.{' '}
          </a>
          <a
            id="01:37:15.414"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5835, '01:37:15.414')}
          >
            It was studied mostly in growth hormone deficiency.{' '}
          </a>
          <a
            id="01:37:19.814"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5839, '01:37:19.814')}
          >
            And do these.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:37:20.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5840, '01:37:20.420')}
          >
            Do people get angry also?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:37:22.360"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5842, '01:37:22.360')}
          >
            They can, many people report a side effect of anxiety{' '}
          </a>
          <a
            id="01:37:27.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5847, '01:37:27.400')}
          >
            or significant hunger.{' '}
          </a>
          <a
            id="01:37:29.160"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5849, '01:37:29.160')}
          >
            Most people take it in the evening{' '}
          </a>
          <a
            id="01:37:31.120"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5851, '01:37:31.120')}
          >
            so they don't notice that hunger as much.{' '}
          </a>
          <a
            id="01:37:33.680"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5853, '01:37:33.680')}
          >
            It can also greatly increase your blood glucose.{' '}
          </a>
          <a
            id="01:37:36.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5856, '01:37:36.400')}
          >
            So if you're insulin resistant or pre-diabetic{' '}
          </a>
          <a
            id="01:37:38.400"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5858, '01:37:38.400')}
          >
            it gets especially concerning.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:37:41.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5861, '01:37:41.193')}
          >
            this is one of those rare moments where I hear something{' '}
          </a>
          <a
            id="01:37:43.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5863, '01:37:43.673')}
          >
            and I think, okay, even though there's this kit{' '}
          </a>
          <a
            id="01:37:48.153"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5868, '01:37:48.153')}
          >
            of compounds that can increase GH and IGF-1,{' '}
          </a>
          <a
            id="01:37:50.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5870, '01:37:50.433')}
          >
            based on everything you're telling me,{' '}
          </a>
          <a
            id="01:37:52.473"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5872, '01:37:52.473')}
          >
            maybe just taking GH is the better option for those people{' '}
          </a>
          <a
            id="01:37:55.993"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5875, '01:37:55.993')}
          >
            because growth hormone, at least it's synthetic growth{' '}
          </a>
          <a
            id="01:37:58.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5878, '01:37:58.673')}
          >
            hormone is mimicking an endogenous hormone.{' '}
          </a>
          <a
            id="01:38:01.113"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5881, '01:38:01.113')}
          >
            I mean, certainly not taking anything might be the ideal,{' '}
          </a>
          <a
            id="01:38:04.753"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5884, '01:38:04.753')}
          >
            but for those that want to increase growth hormone{' '}
          </a>
          <a
            id="01:38:06.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5886, '01:38:06.553')}
          >
            and they want to use pharmacology to do that,{' '}
          </a>
          <a
            id="01:38:08.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5888, '01:38:08.873')}
          >
            it sounds like these peptides are pretty precarious.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:38:12.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5892, '01:38:12.935')}
          >
            Yeah, it kind of depends on the situation.{' '}
          </a>
          <a
            id="01:38:15.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5895, '01:38:15.935')}
          >
            If there's an individual that struggles with hunger{' '}
          </a>
          <a
            id="01:38:18.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5898, '01:38:18.935')}
          >
            and not eating enough, for example,{' '}
          </a>
          <a
            id="01:38:21.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5901, '01:38:21.935')}
          >
            someone who has a very small stomach{' '}
          </a>
          <a
            id="01:38:24.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5904, '01:38:24.935')}
          >
            or they just have a very low hunger drive,{' '}
          </a>
          <a
            id="01:38:27.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5907, '01:38:27.935')}
          >
            sometimes you want more of that orexigenic signaling.{' '}
          </a>
          <a
            id="01:38:30.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5910, '01:38:30.935')}
          >
            The hypothalamus, you have anorexigenic signaling,{' '}
          </a>
          <a
            id="01:38:33.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5913, '01:38:33.935')}
          >
            which is kind of like anorexia,{' '}
          </a>
          <a
            id="01:38:36.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5916, '01:38:36.935')}
          >
            and orexigenic signaling,{' '}
          </a>
          <a
            id="01:38:39.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5919, '01:38:39.935')}
          >
            the center of the hypothalamus or the hangry center.{' '}
          </a>
          <a
            id="01:38:42.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5922, '01:38:42.935')}
          >
            And if there's an imbalance between those two,{' '}
          </a>
          <a
            id="01:38:45.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5925, '01:38:45.935')}
          >
            then perhaps it'd be helpful,{' '}
          </a>
          <a
            id="01:38:48.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5928, '01:38:48.935')}
          >
            potentially theoretically helpful in anorexics,{' '}
          </a>
          <a
            id="01:38:51.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5931, '01:38:51.935')}
          >
            of which the incidence of anorexia in men{' '}
          </a>
          <a
            id="01:38:54.935"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5934, '01:38:54.935')}
          >
            is increasing significantly.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:38:56.793"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5936, '01:38:56.793')}
          >
            as you're telling me this,{' '}
          </a>
          <a
            id="01:38:57.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5937, '01:38:57.633')}
          >
            I'm remembering being 14 or 15 years old{' '}
          </a>
          <a
            id="01:38:59.913"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5939, '01:38:59.913')}
          >
            and I would go into the kitchen sometimes{' '}
          </a>
          <a
            id="01:39:02.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5942, '01:39:02.193')}
          >
            and I was so hungry, I would just obliterate all the food.{' '}
          </a>
          <a
            id="01:39:05.713"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5945, '01:39:05.713')}
          >
            And I do remember being,{' '}
          </a>
          <a
            id="01:39:07.113"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5947, '01:39:07.113')}
          >
            I've always been a pretty high energy guy,{' '}
          </a>
          <a
            id="01:39:08.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5948, '01:39:08.553')}
          >
            but having an immense amount of energy.{' '}
          </a>
          <a
            id="01:39:10.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5950, '01:39:10.433')}
          >
            I don't, I can't recall if it was a hangry feeling or not,{' '}
          </a>
          <a
            id="01:39:12.713"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5952, '01:39:12.713')}
          >
            but I'm guessing that was growth hormone.{' '}
          </a>
          <a
            id="01:39:13.833"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5953, '01:39:13.833')}
          >
            I grew one foot in a single academic year.{' '}
          </a>
          <a
            id="01:39:16.433"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5956, '01:39:16.433')}
          >
            So I imagine that was at least in part{' '}
          </a>
          <a
            id="01:39:18.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5958, '01:39:18.593')}
          >
            due to growth hormone.{' '}
          </a>
          <a
            id="01:39:20.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5960, '01:39:20.633')}
          >
            In any case, sermorelin is the peptide{' '}
          </a>
          <a
            id="01:39:23.473"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5963, '01:39:23.473')}
          >
            that I hear the most often about.{' '}
          </a>
          <a
            id="01:39:25.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5965, '01:39:25.593')}
          >
            I admittedly tried a run of it.{' '}
          </a>
          <a
            id="01:39:27.833"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5967, '01:39:27.833')}
          >
            I was researching a book{' '}
          </a>
          <a
            id="01:39:30.113"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5970, '01:39:30.113')}
          >
            and decided to take it before sleep on an empty stomach.{' '}
          </a>
          <a
            id="01:39:33.313"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5973, '01:39:33.313')}
          >
            It gave me a tremendous depth of sleep,{' '}
          </a>
          <a
            id="01:39:37.673"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5977, '01:39:37.673')}
          >
            but that sleep was really truncated,{' '}
          </a>
          <a
            id="01:39:39.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5979, '01:39:39.633')}
          >
            which is just nerd speak for saying deep, but short sleep.{' '}
          </a>
          <a
            id="01:39:42.273"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5982, '01:39:42.273')}
          >
            I would wake up after very intense dreams.{' '}
          </a>
          <a
            id="01:39:44.553"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5984, '01:39:44.553')}
          >
            I can't say that it helped me recover{' '}
          </a>
          <a
            id="01:39:46.353"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5986, '01:39:46.353')}
          >
            from exercise that much.{' '}
          </a>
          <a
            id="01:39:47.473"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5987, '01:39:47.473')}
          >
            I didn't notice any additional fat loss or anything.{' '}
          </a>
          <a
            id="01:39:50.193"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5990, '01:39:50.193')}
          >
            Sort of abandoned it, except for occasional use.{' '}
          </a>
          <a
            id="01:39:52.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5992, '01:39:52.633')}
          >
            Again, this was prescribed by a doctor.{' '}
          </a>
          <a
            id="01:39:54.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5994, '01:39:54.593')}
          >
            You know, I was trying to get the sense{' '}
          </a>
          <a
            id="01:39:57.873"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5997, '01:39:57.873')}
          >
            that these peptides and their effects{' '}
          </a>
          <a
            id="01:39:59.633"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(5999, '01:39:59.633')}
          >
            are somewhat vague and distributed and highly individual.{' '}
          </a>
          <a
            id="01:40:02.593"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6002, '01:40:02.593')}
          >
            Is that a fair way to describe them?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:40:05.120"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6005, '01:40:05.120')}
          >
            Part of the problem with the effective peptides{' '}
          </a>
          <a
            id="01:40:08.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6008, '01:40:08.460')}
          >
            is many people take them in levels{' '}
          </a>
          <a
            id="01:40:11.080"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6011, '01:40:11.080')}
          >
            that are far above the physiologic range.{' '}
          </a>
          <a
            id="01:40:15.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6015, '01:40:15.260')}
          >
            Even individuals who are checking their IGF-1{' '}
          </a>
          <a
            id="01:40:18.200"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6018, '01:40:18.200')}
          >
            while they take these different GHRPs,{' '}
          </a>
          <a
            id="01:40:22.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6022, '01:40:22.260')}
          >
            most of them do not check the binding peptides.{' '}
          </a>
          <a
            id="01:40:25.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6025, '01:40:25.260')}
          >
            For example, IGF binding peptide one, two, or three,{' '}
          </a>
          <a
            id="01:40:29.240"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6029, '01:40:29.240')}
          >
            and their free IGF-1 level{' '}
          </a>
          <a
            id="01:40:31.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6031, '01:40:31.460')}
          >
            might be significantly different.{' '}
          </a>
          <a
            id="01:40:33.840"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6033, '01:40:33.840')}
          >
            So the common doses that people will take these off-label{' '}
          </a>
          <a
            id="01:40:38.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6038, '01:40:38.820')}
          >
            for as a supplement are often much greater{' '}
          </a>
          <a
            id="01:40:42.380"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6042, '01:40:42.380')}
          >
            than the therapeutic or physiologic range.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:40:45.468"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6045, '01:40:45.468')}
          >
            which for me just underscores the fact that it's pretty precarious. I mean,{' '}
          </a>
          <a
            id="01:40:48.348"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6048, '01:40:48.348')}
          >
            I'm not coming in here as the referee of what anyone should or shouldn't do.{' '}
          </a>
          <a
            id="01:40:52.628"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6052, '01:40:52.628')}
          >
            I'm just trying to gather and distribute information, but it,{' '}
          </a>
          <a
            id="01:40:55.948"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6055, '01:40:55.948')}
          >
            I've heard for instance,{' '}
          </a>
          <a
            id="01:40:57.028"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6057, '01:40:57.028')}
          >
            that some companies where people can acquire these things without prescription,{' '}
          </a>
          <a
            id="01:41:00.268"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6060, '01:41:00.268')}
          >
            they, those companies are not good at cleaning out the L the lipid polysaccharide,{' '}
          </a>
          <a
            id="01:41:05.348"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6065, '01:41:05.348')}
          >
            the LPS, which can cause an inflammatory response. In other words,{' '}
          </a>
          <a
            id="01:41:08.468"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6068, '01:41:08.468')}
          >
            these are dirty compounds. And that just sounds risky.{' '}
          </a>
          <a
            id="01:41:12.548"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6072, '01:41:12.548')}
          >
            It just sounds, frankly, it just sounds really dangerous to me.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:41:16.552"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6076, '01:41:16.552')}
          >
            LPS is a common additive in many companies{' '}
          </a>
          <a
            id="01:41:20.552"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6080, '01:41:20.552')}
          >
            that are not pharmacies,{' '}
          </a>
          <a
            id="01:41:23.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6083, '01:41:23.032')}
          >
            but they're selling things{' '}
          </a>
          <a
            id="01:41:24.352"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6084, '01:41:24.352')}
          >
            that people often use as human consumption.{' '}
          </a>
          <a
            id="01:41:27.032"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6087, '01:41:27.032')}
          >
            One interesting note about lipopolysaccharide{' '}
          </a>
          <a
            id="01:41:29.432"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6089, '01:41:29.432')}
          >
            is your gut microbiome actually makes a lot of it as well,{' '}
          </a>
          <a
            id="01:41:32.712"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6092, '01:41:32.712')}
          >
            especially Prevotella, which is a specific species{' '}
          </a>
          <a
            id="01:41:36.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6096, '01:41:36.592')}
          >
            that can have to do with your baseline body temperature.{' '}
          </a>
          <a
            id="01:41:40.512"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6100, '01:41:40.512')}
          >
            So your baseline body temperature might also change{' '}
          </a>
          <a
            id="01:41:43.592"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6103, '01:41:43.592')}
          >
            depending on if you're on a peptide that has LPS in it.{' '}
          </a>
          <a
            id="01:41:46.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6106, '01:41:46.832')}
          >
            Yikes.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:41:47.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6107, '01:41:47.500')}
          >
            yikes and yikes, but I tend to be pretty conservative{' '}
          </a>
          <a
            id="01:41:52.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6112, '01:41:52.020')}
          >
            when it comes to taking anything exogenous,{' '}
          </a>
          <a
            id="01:41:54.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6114, '01:41:54.420')}
          >
            but I do rely on many of the supplements{' '}
          </a>
          <a
            id="01:41:56.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6116, '01:41:56.420')}
          >
            that we talked about earlier.{' '}
          </a>
          <a
            id="01:41:57.340"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6117, '01:41:57.340')}
          >
            And I do try and optimize the behavioral things{' '}
          </a>
          <a
            id="01:41:59.380"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6119, '01:41:59.380')}
          >
            and nutritional things for a long time.{' '}
          </a>
          <a
            id="01:42:02.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6122, '01:42:02.020')}
          >
            Okay, so then leaving peptides behind,{' '}
          </a>
          <a
            id="01:42:06.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6126, '01:42:06.500')}
          >
            we are now, I suppose,{' '}
          </a>
          <a
            id="01:42:07.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6127, '01:42:07.900')}
          >
            in the territory of exogenous hormone.{' '}
          </a>
          <a
            id="01:42:10.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6130, '01:42:10.020')}
          >
            So let's say that somebody decides{' '}
          </a>
          <a
            id="01:42:13.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6133, '01:42:13.500')}
          >
            they're not concerned with fertility{' '}
          </a>
          <a
            id="01:42:14.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6134, '01:42:14.900')}
          >
            or they're gonna bank sperm or they already have kids{' '}
          </a>
          <a
            id="01:42:17.740"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6137, '01:42:17.740')}
          >
            or they're going to defer on this issue{' '}
          </a>
          <a
            id="01:42:19.659"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6139, '01:42:19.659')}
          >
            of wanting to have kids.{' '}
          </a>
          <a
            id="01:42:21.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6141, '01:42:21.180')}
          >
            My understanding is that nowadays,{' '}
          </a>
          <a
            id="01:42:22.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6142, '01:42:22.900')}
          >
            a lot of people are using testosterone.{' '}
          </a>
          <a
            id="01:42:24.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6144, '01:42:24.980')}
          >
            Let's not even call it replacement therapy{' '}
          </a>
          <a
            id="01:42:26.620"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6146, '01:42:26.620')}
          >
            because some of these people have 600, 700,{' '}
          </a>
          <a
            id="01:42:29.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6149, '01:42:29.300')}
          >
            or even 800 nanogram per deciliter reads.{' '}
          </a>
          <a
            id="01:42:32.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6152, '01:42:32.220')}
          >
            So they're not replacing anything that is diminished.{' '}
          </a>
          <a
            id="01:42:35.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6155, '01:42:35.020')}
          >
            They're just trying to augment what's already there,{' '}
          </a>
          <a
            id="01:42:36.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6156, '01:42:36.980')}
          >
            increase what's already there.{' '}
          </a>
          <a
            id="01:42:38.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6158, '01:42:38.500')}
          >
            My understanding is that taking a low dose more frequently{' '}
          </a>
          <a
            id="01:42:42.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6162, '01:42:42.100')}
          >
            is going to be more beneficial{' '}
          </a>
          <a
            id="01:42:43.360"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6163, '01:42:43.360')}
          >
            than the kind of old school way of giving,{' '}
          </a>
          <a
            id="01:42:46.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6166, '01:42:46.100')}
          >
            you know, a hundred or even 200 milligrams{' '}
          </a>
          <a
            id="01:42:48.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6168, '01:42:48.100')}
          >
            in a single injection once every two weeks.{' '}
          </a>
          <a
            id="01:42:50.340"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6170, '01:42:50.340')}
          >
            Is that right?{' '}
          </a>
          <a
            id="01:42:51.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6171, '01:42:51.180')}
          >
            And what do you do with your patients?{' '}
          </a>
          <a
            id="01:42:52.580"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6172, '01:42:52.580')}
          >
            So let me give you a hypothetical.{' '}
          </a>
          <a
            id="01:42:53.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6173, '01:42:53.900')}
          >
            Somebody comes into your office,{' '}
          </a>
          <a
            id="01:42:56.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6176, '01:42:56.940')}
          >
            their blood work and they have blood levels of,{' '}
          </a>
          <a
            id="01:43:00.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6180, '01:43:00.780')}
          >
            let's say 600 nanograms per deciliter testosterone.{' '}
          </a>
          <a
            id="01:43:03.620"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6183, '01:43:03.620')}
          >
            Their estrogen is also in normal range.{' '}
          </a>
          <a
            id="01:43:06.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6186, '01:43:06.180')}
          >
            Everything else checks out,{' '}
          </a>
          <a
            id="01:43:07.660"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6187, '01:43:07.660')}
          >
            but they're complaining of, you know,{' '}
          </a>
          <a
            id="01:43:09.539"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6189, '01:43:09.539')}
          >
            slightly diminished libido,{' '}
          </a>
          <a
            id="01:43:10.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6190, '01:43:10.940')}
          >
            slightly poor recovery from workouts,{' '}
          </a>
          <a
            id="01:43:12.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6192, '01:43:12.940')}
          >
            maybe, you know, reduced motivation and drive,{' '}
          </a>
          <a
            id="01:43:16.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6196, '01:43:16.140')}
          >
            although no major depression.{' '}
          </a>
          <a
            id="01:43:17.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6197, '01:43:17.780')}
          >
            And you come to the conclusion that testosterone therapy,{' '}
          </a>
          <a
            id="01:43:21.060"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6201, '01:43:21.060')}
          >
            not replacement, but testosterone therapy{' '}
          </a>
          <a
            id="01:43:22.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6202, '01:43:22.940')}
          >
            might be a good option to explore.{' '}
          </a>
          <a
            id="01:43:24.380"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6204, '01:43:24.380')}
          >
            What's a typical dosage range{' '}
          </a>
          <a
            id="01:43:27.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6207, '01:43:27.100')}
          >
            and frequency of administration range{' '}
          </a>
          <a
            id="01:43:29.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6209, '01:43:29.140')}
          >
            that you might consider exploring?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:43:31.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6211, '01:43:31.434')}
          >
            And some of this depends on the SHBG and free testosterone as well.{' '}
          </a>
          <a
            id="01:43:35.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6215, '01:43:35.434')}
          >
            So if that same individual had a very high SHBG,{' '}
          </a>
          <a
            id="01:43:38.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6218, '01:43:38.434')}
          >
            which again is the binding protein that binds up the testosterone{' '}
          </a>
          <a
            id="01:43:41.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6221, '01:43:41.434')}
          >
            and all androgens and estrogens,{' '}
          </a>
          <a
            id="01:43:43.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6223, '01:43:43.434')}
          >
            if it is extremely high and they have a free testosterone of 2,{' '}
          </a>
          <a
            id="01:43:47.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6227, '01:43:47.434')}
          >
            then they might need a different dose because they need enough testosterone{' '}
          </a>
          <a
            id="01:43:51.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6231, '01:43:51.434')}
          >
            in order to have a normal eughenadal free testosterone.{' '}
          </a>
          <a
            id="01:43:57.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6237, '01:43:57.434')}
          >
            But a general normal dosing range, especially for someone starting,{' '}
          </a>
          <a
            id="01:44:01.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6241, '01:44:01.434')}
          >
            is around 100-120 mg divided over the course of a week,{' '}
          </a>
          <a
            id="01:44:07.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6247, '01:44:07.434')}
          >
            usually either every other day or three times a week,{' '}
          </a>
          <a
            id="01:44:10.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6250, '01:44:10.434')}
          >
            occasionally twice a week.{' '}
          </a>
          <a
            id="01:44:12.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6252, '01:44:12.434')}
          >
            Many people with SHBG a bit higher can get away pretty easily with twice a week.{' '}
          </a>
          <a
            id="01:44:17.434"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6257, '01:44:17.434')}
          >
            This is assuming that the ester is sipionate or enanthate.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:44:20.506"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6260, '01:44:20.506')}
          >
            So 260 milligram injections of testosterone cypionate per week.{' '}
          </a>
          <a
            id="01:44:24.986"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6264, '01:44:24.986')}
          >
            Yeah, very common dosing.{' '}
          </a>
          <a
            id="01:44:26.266"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6266, '01:44:26.266')}
          >
            To hit that 120 milligrams per week as kind of the typical average.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:44:29.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6269, '01:44:29.450')}
          >
            Average, correct.{' '}
          </a>
          <a
            id="01:44:30.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6270, '01:44:30.350')}
          >
            And I would consider this like a physiologic,{' '}
          </a>
          <a
            id="01:44:33.050"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6273, '01:44:33.050')}
          >
            you can add a dose.{' '}
          </a>
          <a
            id="01:44:34.430"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6274, '01:44:34.430')}
          >
            For many people, even 200 milligrams a week{' '}
          </a>
          <a
            id="01:44:37.470"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6277, '01:44:37.470')}
          >
            is far above the reference range.{' '}
          </a>
          <a
            id="01:44:40.030"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6280, '01:44:40.030')}
          >
            All of this is said with the caveat{' '}
          </a>
          <a
            id="01:44:41.710"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6281, '01:44:41.710')}
          >
            that testosterone is normally released{' '}
          </a>
          <a
            id="01:44:44.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6284, '01:44:44.310')}
          >
            in a pulsatile manner.{' '}
          </a>
          <a
            id="01:44:45.790"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6285, '01:44:45.790')}
          >
            So it's high in the morning, low in the evening.{' '}
          </a>
          <a
            id="01:44:48.070"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6288, '01:44:48.070')}
          >
            Whereas if you're on a testosterone therapy,{' '}
          </a>
          <a
            id="01:44:51.430"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6291, '01:44:51.430')}
          >
            then you're going to have a steady state.{' '}
          </a>
          <a
            id="01:44:54.910"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6294, '01:44:54.910')}
          >
            So your testosterone level is gonna be{' '}
          </a>
          <a
            id="01:44:56.790"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6296, '01:44:56.790')}
          >
            pretty much the same even in the evening.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:44:59.589"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6299, '01:44:59.589')}
          >
            And in your experience, when patients do that,{' '}
          </a>
          <a
            id="01:45:03.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6303, '01:45:03.349')}
          >
            I'm guessing they report the normal constellation{' '}
          </a>
          <a
            id="01:45:05.449"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6305, '01:45:05.449')}
          >
            of positive effects, you know, improved mood,{' '}
          </a>
          <a
            id="01:45:07.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6307, '01:45:07.349')}
          >
            improved energy, improved sleep, recovery, et cetera.{' '}
          </a>
          <a
            id="01:45:10.749"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6310, '01:45:10.749')}
          >
            What are some of the hazards or things{' '}
          </a>
          <a
            id="01:45:12.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6312, '01:45:12.949')}
          >
            that can crop up in blood work or just subjectively{' '}
          </a>
          <a
            id="01:45:16.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6316, '01:45:16.389')}
          >
            that can be warning signs that even a dosage{' '}
          </a>
          <a
            id="01:45:19.189"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6319, '01:45:19.189')}
          >
            of 120 milligrams divided into these two{' '}
          </a>
          <a
            id="01:45:21.549"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6321, '01:45:21.549')}
          >
            or three dosages per week is too high?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:45:23.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6323, '01:45:23.551')}
          >
            Every organ system in the body.{' '}
          </a>
          <a
            id="01:45:26.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6326, '01:45:26.551')}
          >
            So this is when you really have to be at least well-versed in every organ system,{' '}
          </a>
          <a
            id="01:45:32.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6332, '01:45:32.551')}
          >
            not just the genital system.{' '}
          </a>
          <a
            id="01:45:37.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6337, '01:45:37.551')}
          >
            You need to have dermatology prowess, acne is a very common change,{' '}
          </a>
          <a
            id="01:45:43.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6343, '01:45:43.551')}
          >
            lots of different skin pathologies{' '}
          </a>
          <a
            id="01:45:46.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6346, '01:45:46.551')}
          >
            or even bruising can be related to hormone replacement.{' '}
          </a>
          <a
            id="01:45:49.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6349, '01:45:49.551')}
          >
            Hair loss is very common to see as well.{' '}
          </a>
          <a
            id="01:45:52.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6352, '01:45:52.551')}
          >
            Mental status changes.{' '}
          </a>
          <a
            id="01:45:54.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6354, '01:45:54.551')}
          >
            Occasionally it even induces a manic or a bipolar episode{' '}
          </a>
          <a
            id="01:45:58.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6358, '01:45:58.551')}
          >
            because testosterone is also dopaminergic.{' '}
          </a>
          <a
            id="01:46:01.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6361, '01:46:01.551')}
          >
            And then cardiovascularly, not just in the heart,{' '}
          </a>
          <a
            id="01:46:04.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6364, '01:46:04.551')}
          >
            but also concerns for like microvascular ischemic disease,{' '}
          </a>
          <a
            id="01:46:07.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6367, '01:46:07.551')}
          >
            ferritin buildup because the estrogen also increases,{' '}
          </a>
          <a
            id="01:46:11.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6371, '01:46:11.551')}
          >
            and then fertility concerns as well and lipid concerns too.{' '}
          </a>
          <a
            id="01:46:15.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6375, '01:46:15.551')}
          >
            So you really have to be a hematologist, dermatologist, cardiologist,{' '}
          </a>
          <a
            id="01:46:21.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6381, '01:46:21.551')}
          >
            lipidologist, the whole nine yards.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:46:23.694"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6383, '01:46:23.694')}
          >
            so{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:46:24.571"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6384, '01:46:24.571')}
          >
            another reason or set of reasons rather to if one is considering using testosterone
            therapy{' '}
          </a>
          <a
            id="01:46:31.291"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6391, '01:46:31.291')}
          >
            to really do this in close communication with a really good physician because that's a
            lot{' '}
          </a>
          <a
            id="01:46:36.171"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6396, '01:46:36.171')}
          >
            to monitor. Knowing whether or not you have acne or not is one thing, but knowing
            whether or not{' '}
          </a>
          <a
            id="01:46:39.851"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6399, '01:46:39.851')}
          >
            your LDL is going up, your ApoB is going up, that's a whole other biz and that needs to
            be{' '}
          </a>
          <a
            id="01:46:43.771"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6403, '01:46:43.771')}
          >
            done through blood work is what I'm interested in.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:46:45.496"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6405, '01:46:45.496')}
          >
            I'm hearing.{' '}
          </a>
          <a
            id="01:46:46.336"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6406, '01:46:46.336')}
          >
            Correct, and if your physician that is managing{' '}
          </a>
          <a
            id="01:46:49.096"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6409, '01:46:49.096')}
          >
            or prescribing your testosterone therapy{' '}
          </a>
          <a
            id="01:46:52.576"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6412, '01:46:52.576')}
          >
            or your HRT is not well-versed in these systems,{' '}
          </a>
          <a
            id="01:46:56.056"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6416, '01:46:56.056')}
          >
            you would want him or her to be part{' '}
          </a>
          <a
            id="01:46:57.816"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6417, '01:46:57.816')}
          >
            of an interdisciplinary team where they have other experts{' '}
          </a>
          <a
            id="01:47:00.656"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6420, '01:47:00.656')}
          >
            that can monitor those systems.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:47:03.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6423, '01:47:03.350')}
          >
            I skipped over a sort of still intermediate set of things,{' '}
          </a>
          <a
            id="01:47:07.330"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6427, '01:47:07.330')}
          >
            prescription drugs,{' '}
          </a>
          <a
            id="01:47:08.270"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6428, '01:47:08.270')}
          >
            but maybe talking about testosterone first{' '}
          </a>
          <a
            id="01:47:10.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6430, '01:47:10.750')}
          >
            was a bit of a mistake on my part,{' '}
          </a>
          <a
            id="01:47:12.130"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6432, '01:47:12.130')}
          >
            because I'm aware that there are actually,{' '}
          </a>
          <a
            id="01:47:14.670"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6434, '01:47:14.670')}
          >
            I think there are companies,{' '}
          </a>
          <a
            id="01:47:15.730"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6435, '01:47:15.730')}
          >
            but certainly groups out there that say,{' '}
          </a>
          <a
            id="01:47:17.670"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6437, '01:47:17.670')}
          >
            no wait, don't go straight from nothing{' '}
          </a>
          <a
            id="01:47:20.710"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6440, '01:47:20.710')}
          >
            to supplements to testosterone.{' '}
          </a>
          <a
            id="01:47:22.070"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6442, '01:47:22.070')}
          >
            Once you're doing behaviors{' '}
          </a>
          <a
            id="01:47:23.910"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6443, '01:47:23.910')}
          >
            and optimizing nutrition supplements,{' '}
          </a>
          <a
            id="01:47:26.070"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6446, '01:47:26.070')}
          >
            let's forget peptides,{' '}
          </a>
          <a
            id="01:47:27.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6447, '01:47:27.350')}
          >
            but instead of going straight to testosterone therapy,{' '}
          </a>
          <a
            id="01:47:30.550"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6450, '01:47:30.550')}
          >
            one idea that many people are pursuing{' '}
          </a>
          <a
            id="01:47:32.590"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6452, '01:47:32.590')}
          >
            is to take the prescription drugs{' '}
          </a>
          <a
            id="01:47:35.910"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6455, '01:47:35.910')}
          >
            that trigger luteinizing hormones,{' '}
          </a>
          <a
            id="01:47:37.390"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6457, '01:47:37.390')}
          >
            so taking HCG, human chorionic gonadotropin,{' '}
          </a>
          <a
            id="01:47:41.350"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6461, '01:47:41.350')}
          >
            which my understanding is will increase testosterone,{' '}
          </a>
          <a
            id="01:47:44.130"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6464, '01:47:44.130')}
          >
            but also estrogen,{' '}
          </a>
          <a
            id="01:47:45.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6465, '01:47:45.310')}
          >
            or they'll take things like clomiphene.{' '}
          </a>
          <a
            id="01:47:47.870"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6467, '01:47:47.870')}
          >
            In fact, I think there are a bunch of companies{' '}
          </a>
          <a
            id="01:47:49.470"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6469, '01:47:49.470')}
          >
            out there now that are saying,{' '}
          </a>
          <a
            id="01:47:50.990"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6470, '01:47:50.990')}
          >
            don't take testosterone, it shuts down spermatogenesis,{' '}
          </a>
          <a
            id="01:47:53.310"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6473, '01:47:53.310')}
          >
            shuts down testosterone production,{' '}
          </a>
          <a
            id="01:47:55.550"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6475, '01:47:55.550')}
          >
            clomiphene is the way to go.{' '}
          </a>
          <a
            id="01:47:57.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6477, '01:47:57.750')}
          >
            Maybe you could educate us about the HCG monotherapy,{' '}
          </a>
          <a
            id="01:48:01.430"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6481, '01:48:01.430')}
          >
            I think it's called where you're just mono,{' '}
          </a>
          <a
            id="01:48:02.950"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6482, '01:48:02.950')}
          >
            one, just taking HCG,{' '}
          </a>
          <a
            id="01:48:04.670"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6484, '01:48:04.670')}
          >
            and clomiphene as a,{' '}
          </a>
          <a
            id="01:48:07.550"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6487, '01:48:07.550')}
          >
            and or clomiphene as a tool to ratchet up hormones.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:48:12.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6492, '01:48:12.757')}
          >
            So quick points on HCG, human chorionic endotropin,{' '}
          </a>
          <a
            id="01:48:15.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6495, '01:48:15.757')}
          >
            made during especially the first trimester of pregnancy.{' '}
          </a>
          <a
            id="01:48:18.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6498, '01:48:18.757')}
          >
            It has effects other than binding to the LH receptor.{' '}
          </a>
          <a
            id="01:48:22.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6502, '01:48:22.757')}
          >
            It also binds to the TSH receptor in the thyroid.{' '}
          </a>
          <a
            id="01:48:26.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6506, '01:48:26.757')}
          >
            So thyroid-stimulating hormone.{' '}
          </a>
          <a
            id="01:48:28.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6508, '01:48:28.757')}
          >
            Yes. In fact, if you look at a molecule of HCG and thyroid-stimulating hormone,{' '}
          </a>
          <a
            id="01:48:32.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6512, '01:48:32.757')}
          >
            they are extremely similar.{' '}
          </a>
          <a
            id="01:48:35.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6515, '01:48:35.757')}
          >
            However, you need a relatively high dose of HCG to bind to the TSH receptor.{' '}
          </a>
          <a
            id="01:48:40.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6520, '01:48:40.757')}
          >
            This is a normal mechanism in pregnancy{' '}
          </a>
          <a
            id="01:48:42.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6522, '01:48:42.757')}
          >
            that accounts for the increased need of thyroid hormone,{' '}
          </a>
          <a
            id="01:48:45.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6525, '01:48:45.757')}
          >
            usually about 30% to 40%.{' '}
          </a>
          <a
            id="01:48:47.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6527, '01:48:47.757')}
          >
            So that's why if someone has hypothyroidism,{' '}
          </a>
          <a
            id="01:48:50.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6530, '01:48:50.757')}
          >
            you need to increase their dose of thyroid{' '}
          </a>
          <a
            id="01:48:52.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6532, '01:48:52.757')}
          >
            because the HCG is not going to be doing it for you.{' '}
          </a>
          <a
            id="01:48:55.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6535, '01:48:55.757')}
          >
            The clomid or clomiphene, there's two main, I believe it's diastereoisomers,{' '}
          </a>
          <a
            id="01:49:02.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6542, '01:49:02.757')}
          >
            and one of them is N-clomiphene and one of them is ZOO-clomiphene.{' '}
          </a>
          <a
            id="01:49:06.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6546, '01:49:06.757')}
          >
            These two work slightly differently.{' '}
          </a>
          <a
            id="01:49:08.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6548, '01:49:08.757')}
          >
            N-clomiphene, I believe, has a faster half-life{' '}
          </a>
          <a
            id="01:49:12.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6552, '01:49:12.757')}
          >
            and it is potentially slightly better tolerated.{' '}
          </a>
          <a
            id="01:49:16.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6556, '01:49:16.757')}
          >
            However, they were studying it...{' '}
          </a>
          <a
            id="01:49:19.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6559, '01:49:19.757')}
          >
            Clomid is a very commonly prescribed drug{' '}
          </a>
          <a
            id="01:49:21.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6561, '01:49:21.757')}
          >
            and obviously there's plenty of N-clomiphene in clomid.{' '}
          </a>
          <a
            id="01:49:26.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6566, '01:49:26.757')}
          >
            However, the drug which was Andrazol, A-N-D-R-O-X-A-L,{' '}
          </a>
          <a
            id="01:49:31.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6571, '01:49:31.757')}
          >
            did not go all the way through the FDA approval process{' '}
          </a>
          <a
            id="01:49:34.757"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6574, '01:49:34.757')}
          >
            with clomid being FDA approved.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:49:36.001"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6576, '01:49:36.001')}
          >
            Okay, so there's Clomid, which contains clomiphene,{' '}
          </a>
          <a
            id="01:49:38.921"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6578, '01:49:38.921')}
          >
            but they're also,{' '}
          </a>
          <a
            id="01:49:40.321"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6580, '01:49:40.321')}
          >
            because we're talking about male hormone optimization{' '}
          </a>
          <a
            id="01:49:42.921"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6582, '01:49:42.921')}
          >
            this episode,{' '}
          </a>
          <a
            id="01:49:43.961"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6583, '01:49:43.961')}
          >
            there are males out there{' '}
          </a>
          <a
            id="01:49:45.481"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6585, '01:49:45.481')}
          >
            who want to increase their testosterone{' '}
          </a>
          <a
            id="01:49:47.881"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6587, '01:49:47.881')}
          >
            and other hormones, maybe growth hormone, et cetera,{' '}
          </a>
          <a
            id="01:49:51.001"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6591, '01:49:51.001')}
          >
            who opt to not take exogenous testosterone.{' '}
          </a>
          <a
            id="01:49:54.041"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6594, '01:49:54.041')}
          >
            So no cream, no pellet, no pill, no injectable,{' '}
          </a>
          <a
            id="01:49:57.521"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6597, '01:49:57.521')}
          >
            sipionate, but decide to take clomiphene{' '}
          </a>
          <a
            id="01:50:00.881"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6600, '01:50:00.881')}
          >
            a couple of times a week.{' '}
          </a>
          <a
            id="01:50:03.161"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6603, '01:50:03.161')}
          >
            My understanding, I've never done this,{' '}
          </a>
          <a
            id="01:50:04.721"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6604, '01:50:04.721')}
          >
            I would say if I had,{' '}
          </a>
          <a
            id="01:50:05.761"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6605, '01:50:05.761')}
          >
            my understanding is that taking clomiphene,{' '}
          </a>
          <a
            id="01:50:09.161"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6609, '01:50:09.161')}
          >
            maybe two 50 milligram tablets a week{' '}
          </a>
          <a
            id="01:50:11.881"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6611, '01:50:11.881')}
          >
            is what I hear people are doing,{' '}
          </a>
          <a
            id="01:50:13.441"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6613, '01:50:13.441')}
          >
            will increase what?{' '}
          </a>
          <a
            id="01:50:14.841"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6614, '01:50:14.841')}
          >
            Luteinizing hormone,{' '}
          </a>
          <a
            id="01:50:17.481"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6617, '01:50:17.481')}
          >
            the various estrogen receptor subunits.{' '}
          </a>
          <a
            id="01:50:19.521"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6619, '01:50:19.521')}
          >
            Could you explain how clomiphene would benefit anyone?{' '}
          </a>
          <a
            id="01:50:21.961"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6621, '01:50:21.961')}
          >
            And is this a good strategy?{' '}
          </a>
          <a
            id="01:50:23.201"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6623, '01:50:23.201')}
          >
            I'm hearing that it's being done quite a lot now.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:50:25.495"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6625, '01:50:25.495')}
          >
            It will increase testosterone in a dose-dependent manner,{' '}
          </a>
          <a
            id="01:50:29.975"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6629, '01:50:29.975')}
          >
            but it has many other pharmacodynamic effects,{' '}
          </a>
          <a
            id="01:50:32.635"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6632, '01:50:32.635')}
          >
            which is the effect of the drug on the body,{' '}
          </a>
          <a
            id="01:50:35.095"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6635, '01:50:35.095')}
          >
            other than its effect on the hypothalamus{' '}
          </a>
          <a
            id="01:50:37.175"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6637, '01:50:37.175')}
          >
            and the pituitary.{' '}
          </a>
          <a
            id="01:50:38.055"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6638, '01:50:38.055')}
          >
            So in the hypothalamus and the pituitary,{' '}
          </a>
          <a
            id="01:50:40.695"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6640, '01:50:40.695')}
          >
            it does what's called negative feedback inhibition,{' '}
          </a>
          <a
            id="01:50:45.735"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6645, '01:50:45.735')}
          >
            or it blocks the oxygen of estrogen.{' '}
          </a>
          <a
            id="01:50:48.455"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6648, '01:50:48.455')}
          >
            So it crowds out estrogen from the estrogen receptor{' '}
          </a>
          <a
            id="01:50:52.855"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6652, '01:50:52.855')}
          >
            on the hypothalamus and the pituitary.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:50:54.824"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6654, '01:50:54.824')}
          >
            And what's the subjective effect that that would cause?{' '}
          </a>
          <a
            id="01:50:57.164"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6657, '01:50:57.164')}
          >
            So my understanding and experience of estrogen{' '}
          </a>
          <a
            id="01:51:00.124"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6660, '01:51:00.124')}
          >
            is that if I ever took,{' '}
          </a>
          <a
            id="01:51:01.964"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6661, '01:51:01.964')}
          >
            and I did take a very low dose{' '}
          </a>
          <a
            id="01:51:03.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6663, '01:51:03.284')}
          >
            of an aromatase inhibitor once, and I felt terrible.{' '}
          </a>
          <a
            id="01:51:05.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6665, '01:51:05.844')}
          >
            Actually, reduced libido, joints felt achy.{' '}
          </a>
          <a
            id="01:51:09.164"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6669, '01:51:09.164')}
          >
            That's when I discovered that, wow,{' '}
          </a>
          <a
            id="01:51:10.644"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6670, '01:51:10.644')}
          >
            estrogen is actually really important{' '}
          </a>
          <a
            id="01:51:12.524"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6672, '01:51:12.524')}
          >
            for your brain function, for joint function,{' '}
          </a>
          <a
            id="01:51:14.884"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6674, '01:51:14.884')}
          >
            and for libido.{' '}
          </a>
          <a
            id="01:51:16.204"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6676, '01:51:16.204')}
          >
            And suppressing estrogen, for me,{' '}
          </a>
          <a
            id="01:51:18.084"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6678, '01:51:18.084')}
          >
            just turned out to be the wrong idea.{' '}
          </a>
          <a
            id="01:51:19.964"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6679, '01:51:19.964')}
          >
            But my levels indicate that it's within reference range.{' '}
          </a>
          <a
            id="01:51:22.924"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6682, '01:51:22.924')}
          >
            Okay, so why would I want to take something{' '}
          </a>
          <a
            id="01:51:26.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6686, '01:51:26.284')}
          >
            that would increase the activity of an estrogen receptor?{' '}
          </a>
          <a
            id="01:51:30.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6690, '01:51:30.244')}
          >
            I just can't find the rationale for that.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:51:32.945"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6692, '01:51:32.945')}
          >
            The main rationale behind taking a CIRM{' '}
          </a>
          <a
            id="01:51:35.785"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6695, '01:51:35.785')}
          >
            is as a very temporary measure{' '}
          </a>
          <a
            id="01:51:38.905"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6698, '01:51:38.905')}
          >
            that is not going to suppress pituitary{' '}
          </a>
          <a
            id="01:51:41.425"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6701, '01:51:41.425')}
          >
            or hypothalamic function.{' '}
          </a>
          <a
            id="01:51:43.285"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6703, '01:51:43.285')}
          >
            If your testosterone is just so drastically low{' '}
          </a>
          <a
            id="01:51:46.945"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6706, '01:51:46.945')}
          >
            that it is unlikely to recover anyway.{' '}
          </a>
          <a
            id="01:51:50.425"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6710, '01:51:50.425')}
          >
            So most of the time it is not clinically useful{' '}
          </a>
          <a
            id="01:51:53.965"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6713, '01:51:53.965')}
          >
            and CIRM should not be prescribed very often,{' '}
          </a>
          <a
            id="01:51:57.405"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6717, '01:51:57.405')}
          >
            certainly not as long-term testosterone replacement{' '}
          </a>
          <a
            id="01:52:01.265"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6721, '01:52:01.265')}
          >
            or testosterone optimization in most individuals.{' '}
          </a>
          <a
            id="01:52:04.305"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6724, '01:52:04.305')}
          >
            There's always exceptions to everything,{' '}
          </a>
          <a
            id="01:52:06.665"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6726, '01:52:06.665')}
          >
            but there's five different estrogen{' '}
          </a>
          <a
            id="01:52:10.065"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6730, '01:52:10.065')}
          >
            and estrogen-related receptors.{' '}
          </a>
          <a
            id="01:52:12.265"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6732, '01:52:12.265')}
          >
            There's two main estrogen receptors{' '}
          </a>
          <a
            id="01:52:14.905"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6734, '01:52:14.905')}
          >
            and Clomid and every CIRM has a very unique profile{' '}
          </a>
          <a
            id="01:52:19.185"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6739, '01:52:19.185')}
          >
            because they selectively inhibit some receptors{' '}
          </a>
          <a
            id="01:52:22.025"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6742, '01:52:22.025')}
          >
            in some tissues, but not other receptors in other tissues.{' '}
          </a>
          <a
            id="01:52:25.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6745, '01:52:25.225')}
          >
            For example, Clomid can inhibit receptors that are in the eye{' '}
          </a>
          <a
            id="01:52:29.985"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6749, '01:52:29.985')}
          >
            and it can cause visual changes, blurry vision,{' '}
          </a>
          <a
            id="01:52:34.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6754, '01:52:34.225')}
          >
            especially at higher doses.{' '}
          </a>
          <a
            id="01:52:37.225"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6757, '01:52:37.225')}
          >
            And it also acts in every other tissue of the body.{' '}
          </a>
          <a
            id="01:52:40.625"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6760, '01:52:40.625')}
          >
            So side effects from Clomid{' '}
          </a>
          <a
            id="01:52:43.265"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6763, '01:52:43.265')}
          >
            and other selective estrogen receptor modifiers{' '}
          </a>
          <a
            id="01:52:45.984"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6765, '01:52:45.984')}
          >
            are very common.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:52:47.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6767, '01:52:47.937')}
          >
            So I'm, at least by my mind,{' '}
          </a>
          <a
            id="01:52:50.297"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6770, '01:52:50.297')}
          >
            I'm going to pool them with peptides and say,{' '}
          </a>
          <a
            id="01:52:52.577"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6772, '01:52:52.577')}
          >
            it sounds precarious and probably not ideal for most people.{' '}
          </a>
          <a
            id="01:52:57.097"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6777, '01:52:57.097')}
          >
            Going back to testosterone therapy, then again,{' '}
          </a>
          <a
            id="01:52:59.417"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6779, '01:52:59.417')}
          >
            notice folks I've deleted the replacement part{' '}
          </a>
          <a
            id="01:53:01.637"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6781, '01:53:01.637')}
          >
            because I think so many people are using testosterone{' '}
          </a>
          <a
            id="01:53:05.257"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6785, '01:53:05.257')}
          >
            therapy without the need to,{' '}
          </a>
          <a
            id="01:53:06.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6786, '01:53:06.657')}
          >
            the sort of reference range need to, to replace anything,{' '}
          </a>
          <a
            id="01:53:12.957"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6792, '01:53:12.957')}
          >
            but rather building on what they already have{' '}
          </a>
          <a
            id="01:53:14.877"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6794, '01:53:14.877')}
          >
            for purposes of increasing vitality, et cetera.{' '}
          </a>
          <a
            id="01:53:17.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6797, '01:53:17.657')}
          >
            Going back to that,{' '}
          </a>
          <a
            id="01:53:19.137"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6799, '01:53:19.137')}
          >
            my understanding is that taking HCG several times per week{' '}
          </a>
          <a
            id="01:53:23.457"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6803, '01:53:23.457')}
          >
            can help maintain spermatogenesis and fertility,{' '}
          </a>
          <a
            id="01:53:25.797"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6805, '01:53:25.797')}
          >
            even while people are on testosterone,{' '}
          </a>
          <a
            id="01:53:27.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6807, '01:53:27.497')}
          >
            but, and you and I were talking about this earlier,{' '}
          </a>
          <a
            id="01:53:29.297"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6809, '01:53:29.297')}
          >
            that there's tremendous variation.{' '}
          </a>
          <a
            id="01:53:30.857"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6810, '01:53:30.857')}
          >
            Some people will take a small amount of testosterone{' '}
          </a>
          <a
            id="01:53:33.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6813, '01:53:33.497')}
          >
            and just crush their sperm count.{' '}
          </a>
          <a
            id="01:53:35.357"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6815, '01:53:35.357')}
          >
            They just won't make any viable sperm.{' '}
          </a>
          <a
            id="01:53:37.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6817, '01:53:37.217')}
          >
            Other people can maintain viable sperm production{' '}
          </a>
          <a
            id="01:53:39.897"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6819, '01:53:39.897')}
          >
            while on testosterone, especially if they're taking HCG.{' '}
          </a>
          <a
            id="01:53:43.337"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6823, '01:53:43.337')}
          >
            Is that right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:53:44.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6824, '01:53:44.165')}
          >
            Correct. And there's many reasons for this.{' '}
          </a>
          <a
            id="01:53:46.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6826, '01:53:46.165')}
          >
            Some of this has to do with heat damage to the testes.{' '}
          </a>
          <a
            id="01:53:49.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6829, '01:53:49.165')}
          >
            So, potentially cold therapy could be helpful for that.{' '}
          </a>
          <a
            id="01:53:52.165"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6832, '01:53:52.165')}
          >
            Ice baths, cold showers.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:53:53.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6833, '01:53:53.952')}
          >
            showers or just avoid, and certainly avoiding sauna and hot tub.{' '}
          </a>
          <a
            id="01:53:58.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6838, '01:53:58.952')}
          >
            Yeah.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:53:57.682"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6837, '01:53:57.682')}
          >
            Sauna and hot tub.{' '}
          </a>
          <a
            id="01:53:58.962"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6838, '01:53:58.962')}
          >
            Yeah. Yeah.{' '}
          </a>
          <a
            id="01:54:00.202"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6840, '01:54:00.202')}
          >
            Stopping the daily hot tub can restore fertility{' '}
          </a>
          <a
            id="01:54:02.482"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6842, '01:54:02.482')}
          >
            in many people.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:54:03.504"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6843, '01:54:03.504')}
          >
            I know a number of people{' '}
          </a>
          <a
            id="01:54:05.164"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6845, '01:54:05.164')}
          >
            that are trying to conceive children{' '}
          </a>
          <a
            id="01:54:07.004"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6847, '01:54:07.004')}
          >
            that go into the sauna{' '}
          </a>
          <a
            id="01:54:09.084"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6849, '01:54:09.084')}
          >
            and they'll just put a cold pack in their shorts{' '}
          </a>
          <a
            id="01:54:11.364"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6851, '01:54:11.364')}
          >
            or between their legs,{' '}
          </a>
          <a
            id="01:54:12.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6852, '01:54:12.284')}
          >
            depending on whether or not they're wearing shorts or not{' '}
          </a>
          <a
            id="01:54:13.804"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6853, '01:54:13.804')}
          >
            when they go in.{' '}
          </a>
          <a
            id="01:54:15.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6855, '01:54:15.244')}
          >
            Or they'll alternate ice and heat{' '}
          </a>
          <a
            id="01:54:16.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6856, '01:54:16.844')}
          >
            in a way that maintains coolness{' '}
          </a>
          <a
            id="01:54:19.644"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6859, '01:54:19.644')}
          >
            of the milieu in which the sperm live.{' '}
          </a>
          <a
            id="01:54:24.364"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6864, '01:54:24.364')}
          >
            In other words, they're cooling their scrotum deliberately{' '}
          </a>
          <a
            id="01:54:28.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6868, '01:54:28.284')}
          >
            in order to avoid killing the sperm.{' '}
          </a>
          <a
            id="01:54:30.744"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6870, '01:54:30.744')}
          >
            Actually, I saw an interesting paper{' '}
          </a>
          <a
            id="01:54:32.724"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6872, '01:54:32.724')}
          >
            that said that for every two degree increase{' '}
          </a>
          <a
            id="01:54:35.164"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6875, '01:54:35.164')}
          >
            in temperature of the scrotum,{' '}
          </a>
          <a
            id="01:54:39.124"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6879, '01:54:39.124')}
          >
            there's a 20% decrease in spermatogenesis{' '}
          </a>
          <a
            id="01:54:42.244"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6882, '01:54:42.244')}
          >
            and viability of sperm.{' '}
          </a>
          <a
            id="01:54:44.364"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6884, '01:54:44.364')}
          >
            And that actually, if you look at the difference{' '}
          </a>
          <a
            id="01:54:46.724"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6886, '01:54:46.724')}
          >
            between people who stand a lot, sit a lot, and drive a lot,{' '}
          </a>
          <a
            id="01:54:50.384"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6890, '01:54:50.384')}
          >
            what you see is a progressive decrease in sperm count{' '}
          </a>
          <a
            id="01:54:52.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6892, '01:54:52.844')}
          >
            because when people are sitting,{' '}
          </a>
          <a
            id="01:54:54.444"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6894, '01:54:54.444')}
          >
            there's an increase in temperature.{' '}
          </a>
          <a
            id="01:54:55.564"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6895, '01:54:55.564')}
          >
            And then when they're sitting on the hot seat of the car,{' '}
          </a>
          <a
            id="01:54:58.764"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6898, '01:54:58.764')}
          >
            or using the heated seats, actually it kills sperm.{' '}
          </a>
          <a
            id="01:55:01.604"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6901, '01:55:01.604')}
          >
            I think there are good data on that.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:55:03.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6903, '01:55:03.258')}
          >
            Yeah, excellent data and anecdotally you see it as well.{' '}
          </a>
          <a
            id="01:55:06.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6906, '01:55:06.258')}
          >
            I've had several patients come in for fertility consultations{' '}
          </a>
          <a
            id="01:55:10.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6910, '01:55:10.258')}
          >
            and all we do is like, you know, no medications, no supplements.{' '}
          </a>
          <a
            id="01:55:14.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6914, '01:55:14.258')}
          >
            We change their like several lifestyle things.{' '}
          </a>
          <a
            id="01:55:18.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6918, '01:55:18.258')}
          >
            Very tight-fitting clothing is another one.{' '}
          </a>
          <a
            id="01:55:21.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6921, '01:55:21.258')}
          >
            And soon they have fertility and they're no longer...{' '}
          </a>
          <a
            id="01:55:25.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6925, '01:55:25.258')}
          >
            they have sperm whereas before they did not.{' '}
          </a>
          <a
            id="01:55:28.258"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6928, '01:55:28.258')}
          >
            Interesting.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:55:28.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6928, '01:55:28.992')}
          >
            I'd like to talk about some of the do's and don'ts,{' '}
          </a>
          <a
            id="01:55:32.952"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6932, '01:55:32.952')}
          >
            but we have talked about a lot of do's,{' '}
          </a>
          <a
            id="01:55:35.392"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6935, '01:55:35.392')}
          >
            things that one can do to optimize hormones.{' '}
          </a>
          <a
            id="01:55:37.072"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6937, '01:55:37.072')}
          >
            Maybe we could just do sort of more rapid fire Q&A{' '}
          </a>
          <a
            id="01:55:41.452"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6941, '01:55:41.452')}
          >
            on some of the don'ts and maybe throw in some science{' '}
          </a>
          <a
            id="01:55:44.672"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6944, '01:55:44.672')}
          >
            where you feel it's appropriate.{' '}
          </a>
          <a
            id="01:55:47.832"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6947, '01:55:47.832')}
          >
            Cannabis, marijuana, THC, yes or no,{' '}
          </a>
          <a
            id="01:55:50.992"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6950, '01:55:50.992')}
          >
            it diminishes testosterone levels.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:55:55.030"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6955, '01:55:55.030')}
          >
            Smoked cannabis, I would say diminishes testosterone,{' '}
          </a>
          <a
            id="01:55:59.110"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6959, '01:55:59.110')}
          >
            increases prolactin, that's a no.{' '}
          </a>
          <a
            id="01:56:01.470"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6961, '01:56:01.470')}
          >
            Other cannabinoids, not particularly harmful.{' '}
          </a>
          <a
            id="01:56:04.270"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6964, '01:56:04.270')}
          >
            So CBD, CBD, not particularly harmful.{' '}
          </a>
          <a
            id="01:56:08.470"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6968, '01:56:08.470')}
          >
            Smoked CBD, I'm not sure.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:56:10.707"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6970, '01:56:10.707')}
          >
            What about edible cannabis and THC?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:56:14.285"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6974, '01:56:14.285')}
          >
            As far as I know, edible cannabis and THC does not significantly increase prolactin{' '}
          </a>
          <a
            id="01:56:19.685"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6979, '01:56:19.685')}
          >
            to a point where it would be disruptive of hormones.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:56:23.026"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6983, '01:56:23.026')}
          >
            Can marijuana, THC, cannabis, whatever you want to call it,{' '}
          </a>
          <a
            id="01:56:27.026"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6987, '01:56:27.026')}
          >
            increase gynecomastia, the growth of male breast tissue?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:56:29.945"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6989, '01:56:29.945')}
          >
            Yes, it certainly can and there's a pretty good association between smoked THC and
            gynecomastia.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:56:37.505"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(6997, '01:56:37.505')}
          >
            What about nicotine and testosterone and estrogen{' '}
          </a>
          <a
            id="01:56:41.345"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7001, '01:56:41.345')}
          >
            and other hormones? Smoked nicotine.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:56:44.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7004, '01:56:44.373')}
          >
            Nicotine is particularly concerning not only for testosterone,{' '}
          </a>
          <a
            id="01:56:47.613"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7007, '01:56:47.613')}
          >
            but also for estrogen.{' '}
          </a>
          <a
            id="01:56:49.613"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7009, '01:56:49.613')}
          >
            Part of it is, if you're talking about nicotine from tobacco,{' '}
          </a>
          <a
            id="01:56:52.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7012, '01:56:52.373')}
          >
            there's many other carcinogens in it, especially if it's smoked.{' '}
          </a>
          <a
            id="01:56:55.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7015, '01:56:55.373')}
          >
            But nicotine, even if it is chewed, in a dose-dependent manner,{' '}
          </a>
          <a
            id="01:56:59.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7019, '01:56:59.373')}
          >
            so if you can use an extremely small amount of nicotine,{' '}
          </a>
          <a
            id="01:57:02.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7022, '01:57:02.373')}
          >
            then it's not as concerning in the long run.{' '}
          </a>
          <a
            id="01:57:05.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7025, '01:57:05.373')}
          >
            But it's a vasoconstrictor and one of the main concerns with it{' '}
          </a>
          <a
            id="01:57:09.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7029, '01:57:09.373')}
          >
            could be cardiovascular disease or even microvascular ischemic disease{' '}
          </a>
          <a
            id="01:57:15.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7035, '01:57:15.373')}
          >
            that can lead to neurodegenerative disease.{' '}
          </a>
          <a
            id="01:57:18.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7038, '01:57:18.373')}
          >
            So like a type of dementia that can be partly due to nicotine.{' '}
          </a>
          <a
            id="01:57:21.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7041, '01:57:21.373')}
          >
            If you use nicotine for a very long period of time,{' '}
          </a>
          <a
            id="01:57:25.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7045, '01:57:25.373')}
          >
            especially at a higher dose,{' '}
          </a>
          <a
            id="01:57:27.373"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7047, '01:57:27.373')}
          >
            it's a dose-dependent effect on your hormone profile.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:57:32.568"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7052, '01:57:32.568')}
          >
            Is that also true for Nicorette and nicotine, other nicotine gums?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:57:36.770"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7056, '01:57:36.770')}
          >
            At high doses, if you can use an extremely low dose of a nicotine gum,{' '}
          </a>
          <a
            id="01:57:41.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7061, '01:57:41.970')}
          >
            then theoretically that would be maintainable.{' '}
          </a>
          <a
            id="01:57:46.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7066, '01:57:46.970')}
          >
            It's not going to overload the nicotinic receptor.{' '}
          </a>
          <a
            id="01:57:49.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7069, '01:57:49.970')}
          >
            You have acetylcholine and the cholinergic system{' '}
          </a>
          <a
            id="01:57:52.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7072, '01:57:52.970')}
          >
            as one of your main nervous systems, of course.{' '}
          </a>
          <a
            id="01:57:55.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7075, '01:57:55.970')}
          >
            And you have muscarinic receptors and nicotine receptors.{' '}
          </a>
          <a
            id="01:57:58.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7078, '01:57:58.970')}
          >
            And there's just better ways to optimize your nicotinic receptor activity.{' '}
          </a>
          <a
            id="01:58:03.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7083, '01:58:03.970')}
          >
            For example, acetylcholine precursors like alpha-GPC,{' '}
          </a>
          <a
            id="01:58:07.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7087, '01:58:07.970')}
          >
            phosphatidylserine, phosphatidylcholine.{' '}
          </a>
          <a
            id="01:58:10.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7090, '01:58:10.970')}
          >
            Acetylcholinesterase inhibitors, especially natural ones,{' '}
          </a>
          <a
            id="01:58:13.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7093, '01:58:13.970')}
          >
            potentially have a part as well.{' '}
          </a>
          <a
            id="01:58:16.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7096, '01:58:16.970')}
          >
            And then other alkaloids.{' '}
          </a>
          <a
            id="01:58:18.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7098, '01:58:18.970')}
          >
            So nicotine is an alkaloid from the tobacco plant.{' '}
          </a>
          <a
            id="01:58:21.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7101, '01:58:21.970')}
          >
            There's other plants like cytosine and that genus of plants,{' '}
          </a>
          <a
            id="01:58:26.970"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7106, '01:58:26.970')}
          >
            and that alkaloid is also a nicotine receptor agonist.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:58:32.052"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7112, '01:58:32.052')}
          >
            Is it true that cycling for too long,{' '}
          </a>
          <a
            id="01:58:36.332"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7116, '01:58:36.332')}
          >
            literally bicycling, sitting on a bike seat too long{' '}
          </a>
          <a
            id="01:58:39.372"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7119, '01:58:39.372')}
          >
            can damage the prostate?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:58:40.726"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7120, '01:58:40.726')}
          >
            Yes, it can be very concerning,{' '}
          </a>
          <a
            id="01:58:43.726"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7123, '01:58:43.726')}
          >
            especially if you're seated while cycling,{' '}
          </a>
          <a
            id="01:58:46.426"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7126, '01:58:46.426')}
          >
            especially if you're putting a lot of pressure{' '}
          </a>
          <a
            id="01:58:48.186"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7128, '01:58:48.186')}
          >
            on the perineum.{' '}
          </a>
          <a
            id="01:58:49.646"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7129, '01:58:49.646')}
          >
            Your core is kind of like a box{' '}
          </a>
          <a
            id="01:58:52.486"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7132, '01:58:52.486')}
          >
            where your diaphragm sort of makes the top{' '}
          </a>
          <a
            id="01:58:54.946"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7134, '01:58:54.946')}
          >
            and your abs and serratus make the front and the sides,{' '}
          </a>
          <a
            id="01:58:58.506"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7138, '01:58:58.506')}
          >
            your back muscles make the back,{' '}
          </a>
          <a
            id="01:59:00.226"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7140, '01:59:00.226')}
          >
            and then your pelvic floor makes the bottom of the box,{' '}
          </a>
          <a
            id="01:59:03.426"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7143, '01:59:03.426')}
          >
            which is arguably the most important part of your core.{' '}
          </a>
          <a
            id="01:59:06.866"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7146, '01:59:06.866')}
          >
            And that pressure can weaken and even lead to incontinence{' '}
          </a>
          <a
            id="01:59:10.466"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7150, '01:59:10.466')}
          >
            and impotence.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="01:59:13.109"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7153, '01:59:13.109')}
          >
            So we were talking earlier today in the gym about how heavy leg work,{' '}
          </a>
          <a
            id="01:59:18.069"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7158, '01:59:18.069')}
          >
            hack squats, deadlifts,{' '}
          </a>
          <a
            id="01:59:19.349"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7159, '01:59:19.349')}
          >
            those kinds of things that a lot of guys are doing to increase their testosterone{' '}
          </a>
          <a
            id="01:59:22.629"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7162, '01:59:22.629')}
          >
            done correctly can actually augment and build up the strength of the pelvic{' '}
          </a>
          <a
            id="01:59:26.909"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7166, '01:59:26.909')}
          >
            floor done incorrectly can actually weaken the pelvic floor and lead to all{' '}
          </a>
          <a
            id="01:59:30.389"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7170, '01:59:30.389')}
          >
            sorts of issues, including sexual effects, negative sexual effects.{' '}
          </a>
          <a
            id="01:59:33.949"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7173, '01:59:33.949')}
          >
            So how does one go about learning whether or not their movements are being done{' '}
          </a>
          <a
            id="01:59:38.789"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7178, '01:59:38.789')}
          >
            properly to support pelvic floor or to destruct pelvic floor?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="01:59:44.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7184, '01:59:44.800')}
          >
            The pelvic floor is a constellation of muscles{' '}
          </a>
          <a
            id="01:59:47.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7187, '01:59:47.700')}
          >
            just like any other kind of like system in the body.{' '}
          </a>
          <a
            id="01:59:50.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7190, '01:59:50.540')}
          >
            And, you know, form is important{' '}
          </a>
          <a
            id="01:59:54.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7194, '01:59:54.460')}
          >
            if you're doing the Valsalva maneuver,{' '}
          </a>
          <a
            id="01:59:56.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7196, '01:59:56.900')}
          >
            which again is that kind of like bearing down{' '}
          </a>
          <a
            id="02:00:01.000"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7201, '02:00:01.000')}
          >
            or deep breath where you feel all of your abs are tight.{' '}
          </a>
          <a
            id="02:00:03.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7203, '02:00:03.700')}
          >
            You can also notice that your pelvic floor is tight as well.{' '}
          </a>
          <a
            id="02:00:07.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7207, '02:00:07.540')}
          >
            If you have a history of an inguinal hernia,{' '}
          </a>
          <a
            id="02:00:10.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7210, '02:00:10.300')}
          >
            which is a hole kind of like connecting{' '}
          </a>
          <a
            id="02:00:12.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7212, '02:00:12.540')}
          >
            the abdominal cavity down through the pelvic floor{' '}
          </a>
          <a
            id="02:00:15.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7215, '02:00:15.500')}
          >
            or even the scrotum in some cases,{' '}
          </a>
          <a
            id="02:00:17.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7217, '02:00:17.020')}
          >
            and that can be a sign that there is weakness in that area{' '}
          </a>
          <a
            id="02:00:21.840"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7221, '02:00:21.840')}
          >
            and you might have to concentrate on it most{' '}
          </a>
          <a
            id="02:00:23.860"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7223, '02:00:23.860')}
          >
            or even have a physiotherapist or a physical therapist{' '}
          </a>
          <a
            id="02:00:27.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7227, '02:00:27.220')}
          >
            specifically target the pelvic floor.{' '}
          </a>
          <a
            id="02:00:29.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7229, '02:00:29.900')}
          >
            Many exercises in which you Valsalva{' '}
          </a>
          <a
            id="02:00:32.620"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7232, '02:00:32.620')}
          >
            or use your glutes or legs,{' '}
          </a>
          <a
            id="02:00:35.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7235, '02:00:35.780')}
          >
            you can learn to squeeze them{' '}
          </a>
          <a
            id="02:00:37.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7237, '02:00:37.180')}
          >
            and have that mind muscle connection{' '}
          </a>
          <a
            id="02:00:39.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7239, '02:00:39.500')}
          >
            in order to help build up the pelvic floor.{' '}
          </a>
          <a
            id="02:00:41.580"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7241, '02:00:41.580')}
          >
            And there's other things,{' '}
          </a>
          <a
            id="02:00:42.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7242, '02:00:42.780')}
          >
            many people are familiar with Kegels,{' '}
          </a>
          <a
            id="02:00:44.640"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7244, '02:00:44.640')}
          >
            that is just one of the many different exercises{' '}
          </a>
          <a
            id="02:00:47.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7247, '02:00:47.420')}
          >
            that can help your pelvic floor.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:00:49.060"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7249, '02:00:49.060')}
          >
            My understanding is that while strengthening{' '}
          </a>
          <a
            id="02:00:50.660"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7250, '02:00:50.660')}
          >
            the pelvic floor is good,{' '}
          </a>
          <a
            id="02:00:52.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7252, '02:00:52.140')}
          >
            excessive contraction of the pelvic floor{' '}
          </a>
          <a
            id="02:00:53.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7253, '02:00:53.900')}
          >
            can actually limit blood flow to the pelvic area,{' '}
          </a>
          <a
            id="02:00:56.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7256, '02:00:56.180')}
          >
            the penis and so forth.{' '}
          </a>
          <a
            id="02:00:57.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7257, '02:00:57.260')}
          >
            So this is, again, it's a double-edged sword, right?{' '}
          </a>
          <a
            id="02:00:59.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7259, '02:00:59.820')}
          >
            I mean, you don't want guys out there{' '}
          </a>
          <a
            id="02:01:01.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7261, '02:01:01.540')}
          >
            to just start doing endless number of Kegels every day{' '}
          </a>
          <a
            id="02:01:04.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7264, '02:01:04.180')}
          >
            because they're actually gonna constrict blood flow{' '}
          </a>
          <a
            id="02:01:05.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7265, '02:01:05.820')}
          >
            to that area, right?{' '}
          </a>
          <a
            id="02:01:06.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7266, '02:01:06.820')}
          >
            There's a, and in fact, the erection response{' '}
          </a>
          <a
            id="02:01:09.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7269, '02:01:09.460')}
          >
            is parasympathetic.{' '}
          </a>
          <a
            id="02:01:11.260"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7271, '02:01:11.260')}
          >
            It's a relaxed induced response, right?{' '}
          </a>
          <a
            id="02:01:13.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7273, '02:01:13.980')}
          >
            Correct.{' '}
          </a>
          <a
            id="02:01:14.820"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7274, '02:01:14.820')}
          >
            So, you know, for the reason I chuckle is that, you know,{' '}
          </a>
          <a
            id="02:01:18.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7278, '02:01:18.420')}
          >
            because we're talking about things,{' '}
          </a>
          <a
            id="02:01:19.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7279, '02:01:19.500')}
          >
            we don't have visuals or charts,{' '}
          </a>
          <a
            id="02:01:20.860"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7280, '02:01:20.860')}
          >
            and certainly it's hard to know whether or not{' '}
          </a>
          <a
            id="02:01:24.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7284, '02:01:24.140')}
          >
            a given exercise like Kegels are gonna be good or not good.{' '}
          </a>
          <a
            id="02:01:28.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7288, '02:01:28.220')}
          >
            If it's excessive, what, you know,{' '}
          </a>
          <a
            id="02:01:29.420"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7289, '02:01:29.420')}
          >
            how many sets and reps does it take{' '}
          </a>
          <a
            id="02:01:32.060"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7292, '02:01:32.060')}
          >
            before it goes from good to bad?{' '}
          </a>
          <a
            id="02:01:34.480"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7294, '02:01:34.480')}
          >
            Is there a kind of general rule of thumb{' '}
          </a>
          <a
            id="02:01:35.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7295, '02:01:35.900')}
          >
            for people to think about this?{' '}
          </a>
          <a
            id="02:01:37.040"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7297, '02:01:37.040')}
          >
            I mean, clearly blood flow to that area is key, right,{' '}
          </a>
          <a
            id="02:01:41.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7301, '02:01:41.140')}
          >
            for sexual performance,{' '}
          </a>
          <a
            id="02:01:42.220"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7302, '02:01:42.220')}
          >
            and yet when one trains the legs or even walks,{' '}
          </a>
          <a
            id="02:01:45.340"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7305, '02:01:45.340')}
          >
            you're getting blood flow.{' '}
          </a>
          <a
            id="02:01:47.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7307, '02:01:47.020')}
          >
            So my understanding is this,{' '}
          </a>
          <a
            id="02:01:48.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7308, '02:01:48.460')}
          >
            that a combination of weight training{' '}
          </a>
          <a
            id="02:01:50.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7310, '02:01:50.980')}
          >
            to stimulate the positive hormonal and muscular{' '}
          </a>
          <a
            id="02:01:53.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7313, '02:01:53.460')}
          >
            and connective tissue growth is key,{' '}
          </a>
          <a
            id="02:01:56.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7316, '02:01:56.780')}
          >
            provides not overtraining,{' '}
          </a>
          <a
            id="02:01:58.080"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7318, '02:01:58.080')}
          >
            but so is casual exercise like walking and stretching{' '}
          </a>
          <a
            id="02:02:02.540"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7322, '02:02:02.540')}
          >
            and the sorts of things that will then return blood flow{' '}
          </a>
          <a
            id="02:02:04.780"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7324, '02:02:04.780')}
          >
            to that area.{' '}
          </a>
          <a
            id="02:02:05.620"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7325, '02:02:05.620')}
          >
            Is that an overly basic way to think about it,{' '}
          </a>
          <a
            id="02:02:08.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7328, '02:02:08.700')}
          >
            or will that suffice?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:02:09.824"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7329, '02:02:09.824')}
          >
            I think that's a good way to think about it.{' '}
          </a>
          <a
            id="02:02:12.064"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7332, '02:02:12.064')}
          >
            I think the main point with Kegels is they're just one of many different things.{' '}
          </a>
          <a
            id="02:02:17.104"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7337, '02:02:17.104')}
          >
            So if you're having some pelvic floor pathology certainly or even just concerned about
            your{' '}
          </a>
          <a
            id="02:02:21.464"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7341, '02:02:21.464')}
          >
            pelvic floor, don't just take the advice, do Kegels and you'll be okay.{' '}
          </a>
          <a
            id="02:02:27.284"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7347, '02:02:27.284')}
          >
            That is not near enough.{' '}
          </a>
          <a
            id="02:02:28.384"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7348, '02:02:28.384')}
          >
            It's just one of the many aspects.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:02:30.496"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7350, '02:02:30.496')}
          >
            Okay, so going back to the rapid Q&A and then we'll come back to this issue of blood
            flow{' '}
          </a>
          <a
            id="02:02:35.096"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7355, '02:02:35.096')}
          >
            because there's some interesting science and protocols there.{' '}
          </a>
          <a
            id="02:02:38.176"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7358, '02:02:38.176')}
          >
            Question I have is alcohol, does it increase aromatase, the enzyme that converts
            testosterone{' '}
          </a>
          <a
            id="02:02:43.856"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7363, '02:02:43.856')}
          >
            into estrogen or not?{' '}
          </a>
          <a
            id="02:02:45.656"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7365, '02:02:45.656')}
          >
            And is there a dose dependence there?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:02:47.725"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7367, '02:02:47.725')}
          >
            It significantly does.{' '}
          </a>
          <a
            id="02:02:49.925"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7369, '02:02:49.925')}
          >
            There is a dose dependence in general.{' '}
          </a>
          <a
            id="02:02:52.565"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7372, '02:02:52.565')}
          >
            I would not recommend more than three to four,{' '}
          </a>
          <a
            id="02:02:57.105"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7377, '02:02:57.105')}
          >
            you know, standard drinks.{' '}
          </a>
          <a
            id="02:02:59.045"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7379, '02:02:59.045')}
          >
            One huge glass of wine is probably five standard drinks,{' '}
          </a>
          <a
            id="02:03:02.325"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7382, '02:03:02.325')}
          >
            but I would say everyone should try it.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:03:05.562"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7385, '02:03:05.562')}
          >
            every two weeks.{' '}
          </a>
          <a
            id="02:03:07.482"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7387, '02:03:07.482')}
          >
            Yeah, that's consistent with what I discovered{' '}
          </a>
          <a
            id="02:03:09.522"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7389, '02:03:09.522')}
          >
            researching alcohol in an episode we did on alcohol,{' '}
          </a>
          <a
            id="02:03:12.682"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7392, '02:03:12.682')}
          >
            that no alcohol is definitely better{' '}
          </a>
          <a
            id="02:03:15.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7395, '02:03:15.842')}
          >
            for all aspects of health than any alcohol.{' '}
          </a>
          <a
            id="02:03:17.822"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7397, '02:03:17.822')}
          >
            And anyone that says that,{' '}
          </a>
          <a
            id="02:03:18.662"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7398, '02:03:18.662')}
          >
            well, red wine contains these various things,{' '}
          </a>
          <a
            id="02:03:20.682"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7400, '02:03:20.682')}
          >
            well, it doesn't contain enough of those positive things{' '}
          </a>
          <a
            id="02:03:23.302"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7403, '02:03:23.302')}
          >
            to have a positive effect.{' '}
          </a>
          <a
            id="02:03:24.262"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7404, '02:03:24.262')}
          >
            But that if people do opt to drink alcohol,{' '}
          </a>
          <a
            id="02:03:27.282"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7407, '02:03:27.282')}
          >
            that two drinks per week,{' '}
          </a>
          <a
            id="02:03:29.362"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7409, '02:03:29.362')}
          >
            and meaning 20 grams of alcohol,{' '}
          </a>
          <a
            id="02:03:32.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7412, '02:03:32.842')}
          >
            so that's probably two 12 ounce beers{' '}
          </a>
          <a
            id="02:03:34.902"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7414, '02:03:34.902')}
          >
            or two four ounce glasses of wine{' '}
          </a>
          <a
            id="02:03:37.522"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7417, '02:03:37.522')}
          >
            is going to be the upper limit{' '}
          </a>
          <a
            id="02:03:38.962"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7418, '02:03:38.962')}
          >
            beyond which you're going to start seeing{' '}
          </a>
          <a
            id="02:03:40.282"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7420, '02:03:40.282')}
          >
            all sorts of negative effects.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:03:42.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7422, '02:03:42.012')}
          >
            The other thing to keep in mind with alcohol is it has a lot of calories,{' '}
          </a>
          <a
            id="02:03:45.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7425, '02:03:45.012')}
          >
            seven kilocalories per gram, almost as much as fat, which is nine.{' '}
          </a>
          <a
            id="02:03:49.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7429, '02:03:49.012')}
          >
            And then it's also very GABAergic,{' '}
          </a>
          <a
            id="02:03:51.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7431, '02:03:51.012')}
          >
            so it can activate inhibitory neurotransmission.{' '}
          </a>
          <a
            id="02:03:55.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7435, '02:03:55.012')}
          >
            And that can also affect how much LH and FSH is released,{' '}
          </a>
          <a
            id="02:04:02.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7442, '02:04:02.012')}
          >
            so that can also decrease testosterone,{' '}
          </a>
          <a
            id="02:04:05.012"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7445, '02:04:05.012')}
          >
            almost kind of similar to how opiates can decrease testosterone.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:04:10.312"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7450, '02:04:10.312')}
          >
            I feel very lucky that I don't enjoy alcohol,{' '}
          </a>
          <a
            id="02:04:13.712"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7453, '02:04:13.712')}
          >
            never really did, can kind of take it or leave it.{' '}
          </a>
          <a
            id="02:04:16.492"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7456, '02:04:16.492')}
          >
            Certainly don't like sedatives like Valium{' '}
          </a>
          <a
            id="02:04:18.572"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7458, '02:04:18.572')}
          >
            or anything like that,{' '}
          </a>
          <a
            id="02:04:19.412"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7459, '02:04:19.412')}
          >
            which as you just mentioned can suppress testosterone.{' '}
          </a>
          <a
            id="02:04:22.752"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7462, '02:04:22.752')}
          >
            You said the word fat,{' '}
          </a>
          <a
            id="02:04:24.052"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7464, '02:04:24.052')}
          >
            so I'm going to pick up on that and say,{' '}
          </a>
          <a
            id="02:04:27.212"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7467, '02:04:27.212')}
          >
            in order to optimize hormone production,{' '}
          </a>
          <a
            id="02:04:29.112"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7469, '02:04:29.112')}
          >
            is it important to have some saturated fat in one's diet?{' '}
          </a>
          <a
            id="02:04:33.352"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7473, '02:04:33.352')}
          >
            And what happens on very low fat diets{' '}
          </a>
          <a
            id="02:04:35.292"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7475, '02:04:35.292')}
          >
            to testosterone, estrogen, and other steroid hormones?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:04:39.370"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7479, '02:04:39.370')}
          >
            Fat's interesting because there's so many{' '}
          </a>
          <a
            id="02:04:42.370"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7482, '02:04:42.370')}
          >
            different beneficial fats, omega-3s.{' '}
          </a>
          <a
            id="02:04:45.290"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7485, '02:04:45.290')}
          >
            Almost every American gets plenty of omega-6s{' '}
          </a>
          <a
            id="02:04:47.930"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7487, '02:04:47.930')}
          >
            in any developed country, really.{' '}
          </a>
          <a
            id="02:04:50.330"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7490, '02:04:50.330')}
          >
            When it comes to saturated fat,{' '}
          </a>
          <a
            id="02:04:52.990"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7492, '02:04:52.990')}
          >
            there is more of a correlation with hormone optimization.{' '}
          </a>
          <a
            id="02:04:56.530"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7496, '02:04:56.530')}
          >
            If you're eating things with saturated fat,{' '}
          </a>
          <a
            id="02:04:58.890"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7498, '02:04:58.890')}
          >
            you tend to have, those are things with more,{' '}
          </a>
          <a
            id="02:05:01.330"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7501, '02:05:01.330')}
          >
            you know, fat-soluble vitamins{' '}
          </a>
          <a
            id="02:05:03.290"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7503, '02:05:03.290')}
          >
            and things that are very nutrient-dense otherwise,{' '}
          </a>
          <a
            id="02:05:06.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7506, '02:05:06.450')}
          >
            but it is not vital.{' '}
          </a>
          <a
            id="02:05:07.770"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7507, '02:05:07.770')}
          >
            In general, you want to eliminate any trans fat{' '}
          </a>
          <a
            id="02:05:11.010"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7511, '02:05:11.010')}
          >
            unless it's trans fat from the ruminants.{' '}
          </a>
          <a
            id="02:05:13.250"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7513, '02:05:13.250')}
          >
            There's always an exception to everything, right?{' '}
          </a>
          <a
            id="02:05:15.050"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7515, '02:05:15.050')}
          >
            So there is healthy trans omega-3 fats,{' '}
          </a>
          <a
            id="02:05:17.770"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7517, '02:05:17.770')}
          >
            which are formed in the stomach{' '}
          </a>
          <a
            id="02:05:19.290"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7519, '02:05:19.290')}
          >
            of like grass-fed and finished ruminants.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:05:23.313"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7523, '02:05:23.313')}
          >
            But ingesting mostly olive oils,{' '}
          </a>
          <a
            id="02:05:26.393"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7526, '02:05:26.393')}
          >
            maybe nut butters in limited amounts{' '}
          </a>
          <a
            id="02:05:29.353"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7529, '02:05:29.353')}
          >
            because they're very calorie dense,{' '}
          </a>
          <a
            id="02:05:30.913"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7530, '02:05:30.913')}
          >
            but unless people are trying to increase their calories,{' '}
          </a>
          <a
            id="02:05:33.513"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7533, '02:05:33.513')}
          >
            in which case they're a great source of calories.{' '}
          </a>
          <a
            id="02:05:36.573"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7536, '02:05:36.573')}
          >
            Small amounts of butter or ghee, probably okay,{' '}
          </a>
          <a
            id="02:05:39.033"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7539, '02:05:39.033')}
          >
            but not excessive amounts.{' '}
          </a>
          <a
            id="02:05:40.073"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7540, '02:05:40.073')}
          >
            Is that the idea?{' '}
          </a>
          <a
            id="02:05:40.913"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7540, '02:05:40.913')}
          >
            Okay.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:05:40.087"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7540, '02:05:40.087')}
          >
            Is that the idea? Correct, yes.{' '}
          </a>
          <a
            id="02:05:41.887"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7541, '02:05:41.887')}
          >
            Fat is perfectly fine.{' '}
          </a>
          <a
            id="02:05:43.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7543, '02:05:43.607')}
          >
            Cholesterol has an interesting,{' '}
          </a>
          <a
            id="02:05:45.967"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7545, '02:05:45.967')}
          >
            so cholesterol and in general phospholipids{' '}
          </a>
          <a
            id="02:05:49.007"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7549, '02:05:49.007')}
          >
            make the bilayer that's around the cell.{' '}
          </a>
          <a
            id="02:05:51.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7551, '02:05:51.527')}
          >
            But cholesterol is also a hormone in and of itself{' '}
          </a>
          <a
            id="02:05:54.667"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7554, '02:05:54.667')}
          >
            because it binds to the estrogen-related receptor alpha.{' '}
          </a>
          <a
            id="02:05:58.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7558, '02:05:58.767')}
          >
            So I consider that like in the estrogen receptor category{' '}
          </a>
          <a
            id="02:06:01.847"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7561, '02:06:01.847')}
          >
            and that can help with metabolism,{' '}
          </a>
          <a
            id="02:06:03.447"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7563, '02:06:03.447')}
          >
            but also potentially have concerns{' '}
          </a>
          <a
            id="02:06:05.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7565, '02:06:05.767')}
          >
            for cancer and tumor risk.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:06:07.677"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7567, '02:06:07.677')}
          >
            you{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:06:08.740"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7568, '02:06:08.740')}
          >
            I want to go back to the prostate{' '}
          </a>
          <a
            id="02:06:10.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7570, '02:06:10.700')}
          >
            and talk to you about something{' '}
          </a>
          <a
            id="02:06:11.900"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7571, '02:06:11.900')}
          >
            that's kind of a newer emerging trend.{' '}
          </a>
          <a
            id="02:06:14.180"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7574, '02:06:14.180')}
          >
            I know that you've talked to a little bit about this{' '}
          </a>
          <a
            id="02:06:16.440"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7576, '02:06:16.440')}
          >
            in previous podcasts, that a number of men,{' '}
          </a>
          <a
            id="02:06:19.980"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7579, '02:06:19.980')}
          >
            or I should say a number of physicians{' '}
          </a>
          <a
            id="02:06:21.460"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7581, '02:06:21.460')}
          >
            are prescribing low dose Tadalafil,{' '}
          </a>
          <a
            id="02:06:25.020"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7585, '02:06:25.020')}
          >
            also known as Cialis, to their male patients.{' '}
          </a>
          <a
            id="02:06:28.060"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7588, '02:06:28.060')}
          >
            So in dosage ranges of like 2.5 milligrams{' '}
          </a>
          <a
            id="02:06:30.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7590, '02:06:30.700')}
          >
            to five milligrams per day,{' '}
          </a>
          <a
            id="02:06:31.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7591, '02:06:31.940')}
          >
            but not for erectile dysfunction,{' '}
          </a>
          <a
            id="02:06:33.580"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7593, '02:06:33.580')}
          >
            but rather for improving prostate health.{' '}
          </a>
          <a
            id="02:06:36.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7596, '02:06:36.140')}
          >
            And presumably they get sort of a boost{' '}
          </a>
          <a
            id="02:06:37.940"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7597, '02:06:37.940')}
          >
            in terms of blood flow to the genitalia as well.{' '}
          </a>
          <a
            id="02:06:41.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7601, '02:06:41.100')}
          >
            But again, not specifically a deal{' '}
          </a>
          <a
            id="02:06:43.300"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7603, '02:06:43.300')}
          >
            with erectile dysfunction,{' '}
          </a>
          <a
            id="02:06:45.000"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7605, '02:06:45.000')}
          >
            but to deal with prostate health{' '}
          </a>
          <a
            id="02:06:47.140"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7607, '02:06:47.140')}
          >
            and blood flow to the prostate.{' '}
          </a>
          <a
            id="02:06:49.100"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7609, '02:06:49.100')}
          >
            Is that something that you sometimes often prescribe{' '}
          </a>
          <a
            id="02:06:51.700"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7611, '02:06:51.700')}
          >
            to your patients and of what age?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:06:53.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7613, '02:06:53.527')}
          >
            Tadalafil is a very underrated medication.{' '}
          </a>
          <a
            id="02:06:57.607"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7617, '02:06:57.607')}
          >
            The age would kind of depend on the indication.{' '}
          </a>
          <a
            id="02:07:01.127"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7621, '02:07:01.127')}
          >
            So Tadalafil is also a blood pressure medication.{' '}
          </a>
          <a
            id="02:07:04.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7624, '02:07:04.527')}
          >
            It can very slightly decrease blood pressure,{' '}
          </a>
          <a
            id="02:07:06.407"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7626, '02:07:06.407')}
          >
            especially at higher doses.{' '}
          </a>
          <a
            id="02:07:08.567"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7628, '02:07:08.567')}
          >
            At higher doses, a high dose would be 20 milligrams,{' '}
          </a>
          <a
            id="02:07:12.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7632, '02:07:12.527')}
          >
            not 2.5 milligrams.{' '}
          </a>
          <a
            id="02:07:14.547"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7634, '02:07:14.547')}
          >
            But consistently, it can somewhat affect{' '}
          </a>
          <a
            id="02:07:17.067"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7637, '02:07:17.067')}
          >
            with the cones in the eye{' '}
          </a>
          <a
            id="02:07:18.747"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7638, '02:07:18.747')}
          >
            that have to do with red and green sight.{' '}
          </a>
          <a
            id="02:07:20.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7640, '02:07:20.727')}
          >
            Although if you remove it, that effect is reversed.{' '}
          </a>
          <a
            id="02:07:23.167"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7643, '02:07:23.167')}
          >
            So basically, if you don't need really, really good{' '}
          </a>
          <a
            id="02:07:25.646"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7645, '02:07:25.646')}
          >
            red-green discrimination, you can take higher doses.{' '}
          </a>
          <a
            id="02:07:28.327"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7648, '02:07:28.327')}
          >
            But in general, I recommend no higher{' '}
          </a>
          <a
            id="02:07:30.247"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7650, '02:07:30.247')}
          >
            than 10 milligrams a day,{' '}
          </a>
          <a
            id="02:07:31.727"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7651, '02:07:31.727')}
          >
            usually just two or five milligrams.{' '}
          </a>
          <a
            id="02:07:35.627"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7655, '02:07:35.627')}
          >
            One other benefit or other use of Tadalafil{' '}
          </a>
          <a
            id="02:07:39.527"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7659, '02:07:39.527')}
          >
            is that it increases the density of the androgen receptor,{' '}
          </a>
          <a
            id="02:07:42.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7662, '02:07:42.767')}
          >
            similarly to L-carnitine.{' '}
          </a>
          <a
            id="02:07:45.787"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7665, '02:07:45.787')}
          >
            So that's an interesting benefit.{' '}
          </a>
          <a
            id="02:07:47.087"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7667, '02:07:47.087')}
          >
            Another benefit is that if you give it to people{' '}
          </a>
          <a
            id="02:07:49.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7669, '02:07:49.767')}
          >
            with nocturia, which is urinating at night in general,{' '}
          </a>
          <a
            id="02:07:52.807"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7672, '02:07:52.807')}
          >
            it will cut the episodes in half.{' '}
          </a>
          <a
            id="02:07:54.767"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7674, '02:07:54.767')}
          >
            So it could go from two to one,{' '}
          </a>
          <a
            id="02:07:57.047"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7677, '02:07:57.047')}
          >
            which can make a big difference for your sleep,{' '}
          </a>
          <a
            id="02:07:59.046"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7679, '02:07:59.046')}
          >
            which will secondarily make a big difference{' '}
          </a>
          <a
            id="02:08:00.887"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7680, '02:08:00.887')}
          >
            for your growth hormone and testosterone optimization.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:08:03.001"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7683, '02:08:03.001')}
          >
            Interesting. So you said 2.5 to 5 milligrams per day is typical for these prostate
            enhancing effects.{' '}
          </a>
          <a
            id="02:08:09.081"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7689, '02:08:09.081')}
          >
            Yes. And you mentioned the potential side effects on adjusting visual perception. As a
            vision{' '}
          </a>
          <a
            id="02:08:14.761"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7694, '02:08:14.761')}
          >
            scientist, that rings in my mind. But in terms of red-green color discrimination, I'm
            guessing{' '}
          </a>
          <a
            id="02:08:21.081"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7701, '02:08:21.081')}
          >
            unless you're going to be a subject in one of the experiments in my lab or you want to
            be a fighter{' '}
          </a>
          <a
            id="02:08:25.081"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7705, '02:08:25.081')}
          >
            pilot, chances are you can probably get away with a little less red-green color
            discrimination.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:08:29.174"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7709, '02:08:29.174')}
          >
            Correct. It's not considered clinically significant unless someone is a commercial
            pilot.{' '}
          </a>
          <a
            id="02:08:34.674"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7714, '02:08:34.674')}
          >
            Right.{' '}
          </a>
          <a
            id="02:08:35.674"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7715, '02:08:35.674')}
          >
            So if someone's getting their like pilot exam, that's one of the things we look for.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:08:35.199"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7715, '02:08:35.199')}
          >
            Great.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:08:39.417"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7719, '02:08:39.417')}
          >
            Okay, so commercial pilots aside,{' '}
          </a>
          <a
            id="02:08:41.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7721, '02:08:41.217')}
          >
            you might want to ask your doctor about low dose{' '}
          </a>
          <a
            id="02:08:43.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7723, '02:08:43.377')}
          >
            to Dalafil for sake of enhancing prostate health.{' '}
          </a>
          <a
            id="02:08:46.737"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7726, '02:08:46.737')}
          >
            Certainly monitoring PSA,{' '}
          </a>
          <a
            id="02:08:47.977"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7727, '02:08:47.977')}
          >
            prostate-specific antigen is important.{' '}
          </a>
          <a
            id="02:08:49.937"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7729, '02:08:49.937')}
          >
            I can give an anecdote there.{' '}
          </a>
          <a
            id="02:08:52.257"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7732, '02:08:52.257')}
          >
            When I tried Cermoralin,{' '}
          </a>
          <a
            id="02:08:53.977"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7733, '02:08:53.977')}
          >
            one of the surprising side effects that was not welcome{' '}
          </a>
          <a
            id="02:08:57.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7737, '02:08:57.537')}
          >
            was a dramatic spike in my prostate-specific antigen.{' '}
          </a>
          <a
            id="02:09:00.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7740, '02:09:00.697')}
          >
            No one could explain to me why that would happen.{' '}
          </a>
          <a
            id="02:09:04.457"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7744, '02:09:04.457')}
          >
            But when I stopped taking Cermoralin,{' '}
          </a>
          <a
            id="02:09:05.977"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7745, '02:09:05.977')}
          >
            it went back to normal.{' '}
          </a>
          <a
            id="02:09:07.057"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7747, '02:09:07.057')}
          >
            So it's one reason I avoid Cermoralin.{' '}
          </a>
          <a
            id="02:09:09.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7749, '02:09:09.377')}
          >
            At least frequent use of Cermoralin.{' '}
          </a>
          <a
            id="02:09:11.737"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7751, '02:09:11.737')}
          >
            PSA should be kept, what, below levels of,{' '}
          </a>
          <a
            id="02:09:14.537"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7754, '02:09:14.537')}
          >
            you know, somewhere between one and four{' '}
          </a>
          <a
            id="02:09:16.257"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7756, '02:09:16.257')}
          >
            is considered healthy, is that right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:09:18.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7758, '02:09:18.044')}
          >
            It depends on the age, if there's a 20-year-old, likely between 0 and 1.{' '}
          </a>
          <a
            id="02:09:22.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7762, '02:09:22.044')}
          >
            If there's a 40-year-old, likely between 1 and 3.{' '}
          </a>
          <a
            id="02:09:27.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7767, '02:09:27.044')}
          >
            And then if there's an 80-year-old, it would not be abnormal to have a PSA of 5{' '}
          </a>
          <a
            id="02:09:31.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7771, '02:09:31.044')}
          >
            and have that be well within the reference range.{' '}
          </a>
          <a
            id="02:09:34.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7774, '02:09:34.044')}
          >
            Another thing we should mention about PSAs,{' '}
          </a>
          <a
            id="02:09:36.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7776, '02:09:36.044')}
          >
            if you do take a 5-alpha reductase inhibitor like finasteride or dutasteride,{' '}
          </a>
          <a
            id="02:09:41.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7781, '02:09:41.044')}
          >
            often these will cut your PSA in half.{' '}
          </a>
          <a
            id="02:09:44.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7784, '02:09:44.044')}
          >
            For example, if you have a PSA of 6 and you start finasteride or dutasteride{' '}
          </a>
          <a
            id="02:09:50.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7790, '02:09:50.044')}
          >
            and then you recheck it in 6 months and it's 6.5,{' '}
          </a>
          <a
            id="02:09:53.044"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7793, '02:09:53.044')}
          >
            that is a huge concern because that's actually doubled.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:09:55.929"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7795, '02:09:55.929')}
          >
            I'm glad you brought this up because I almost overlooked{' '}
          </a>
          <a
            id="02:09:59.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7799, '02:09:59.889')}
          >
            the fact that I get a lot of questions{' '}
          </a>
          <a
            id="02:10:01.929"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7801, '02:10:01.929')}
          >
            about drugs to offset hair loss.{' '}
          </a>
          <a
            id="02:10:05.009"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7805, '02:10:05.009')}
          >
            Most of those drugs are going to operate{' '}
          </a>
          <a
            id="02:10:06.889"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7806, '02:10:06.889')}
          >
            through the DHT system, the dihydrotestosterone system{' '}
          </a>
          <a
            id="02:10:09.409"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7809, '02:10:09.409')}
          >
            for the reasons we talked about before,{' '}
          </a>
          <a
            id="02:10:10.609"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7810, '02:10:10.609')}
          >
            DHT receptors being on the scalp{' '}
          </a>
          <a
            id="02:10:12.249"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7812, '02:10:12.249')}
          >
            and causing beard growth on the face.{' '}
          </a>
          <a
            id="02:10:15.649"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7815, '02:10:15.649')}
          >
            Is it the case that a number of people taking things{' '}
          </a>
          <a
            id="02:10:19.089"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7819, '02:10:19.089')}
          >
            like Propecia and other things to block the DHT{' '}
          </a>
          <a
            id="02:10:22.729"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7822, '02:10:22.729')}
          >
            or disrupt the DHT pathway are going to experience{' '}
          </a>
          <a
            id="02:10:26.049"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7826, '02:10:26.049')}
          >
            diminished sex drive, diminished kind of motivation{' '}
          </a>
          <a
            id="02:10:31.049"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7831, '02:10:31.049')}
          >
            and general vigor?{' '}
          </a>
          <a
            id="02:10:32.409"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7832, '02:10:32.409')}
          >
            And if so, are there alternatives like topical DHT antagonists{' '}
          </a>
          <a
            id="02:10:35.969"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7835, '02:10:35.969')}
          >
            that they might use if they want to keep their hair{' '}
          </a>
          <a
            id="02:10:39.649"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7839, '02:10:39.649')}
          >
            but not have those negative effects?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:10:42.217"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7842, '02:10:42.217')}
          >
            The way that I think about hair loss{' '}
          </a>
          <a
            id="02:10:44.697"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7844, '02:10:44.697')}
          >
            is you have your fertilizers,{' '}
          </a>
          <a
            id="02:10:47.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7847, '02:10:47.377')}
          >
            also known as a growth agonist,{' '}
          </a>
          <a
            id="02:10:48.837"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7848, '02:10:48.837')}
          >
            and then you have your anti-androgens.{' '}
          </a>
          <a
            id="02:10:51.257"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7851, '02:10:51.257')}
          >
            Whether they're systemic or topical, there's both,{' '}
          </a>
          <a
            id="02:10:54.437"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7854, '02:10:54.437')}
          >
            but that's the general layman's way to think about hair loss.{' '}
          </a>
          <a
            id="02:10:57.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7857, '02:10:57.657')}
          >
            If you're only putting fertilizer in your hair,{' '}
          </a>
          <a
            id="02:10:59.577"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7859, '02:10:59.577')}
          >
            but you have androgenic alopecia or male pattern baldness,{' '}
          </a>
          <a
            id="02:11:02.657"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7862, '02:11:02.657')}
          >
            then those hairs will still miniaturize{' '}
          </a>
          <a
            id="02:11:04.377"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7864, '02:11:04.377')}
          >
            and eventually you'll still have loss.{' '}
          </a>
          <a
            id="02:11:05.977"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7865, '02:11:05.977')}
          >
            Such a great way.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:11:06.500"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7866, '02:11:06.500')}
          >
            word, miniaturize.{' '}
          </a>
          <a
            id="02:11:08.720"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7868, '02:11:08.720')}
          >
            It's enough to send anybody off to find a therapeutic, right?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:11:11.495"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7871, '02:11:11.495')}
          >
            And by the way, it's difficult to tell{' '}
          </a>
          <a
            id="02:11:12.915"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7872, '02:11:12.915')}
          >
            if miniaturization is happening{' '}
          </a>
          <a
            id="02:11:14.195"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7874, '02:11:14.195')}
          >
            unless you have a magnifying glass.{' '}
          </a>
          <a
            id="02:11:16.675"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7876, '02:11:16.675')}
          >
            You can use a-{' '}
          </a>
          <a
            id="02:11:17.515"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7877, '02:11:17.515')}
          >
            Yeah, yeah. For a second.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:11:16.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7876, '02:11:16.844')}
          >
            For a second there, I didn't know whether or not you were making a joke.{' '}
          </a>
          <a
            id="02:11:19.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7879, '02:11:19.844')}
          >
            You're talking about miniaturization of the hair follicle.{' '}
          </a>
          <a
            id="02:11:21.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7881, '02:11:21.844')}
          >
            Correct.{' '}
          </a>
          <a
            id="02:11:22.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7882, '02:11:22.844')}
          >
            So what can reverse that miniaturization?{' '}
          </a>
          <a
            id="02:11:24.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7884, '02:11:24.844')}
          >
            That's just a fun word to say.{' '}
          </a>
          <a
            id="02:11:25.844"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7885, '02:11:25.844')}
          >
            I'm going to just keep saying it.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:11:22.126"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7882, '02:11:22.126')}
          >
            Correct.{' '}
          </a>
          <a
            id="02:11:23.126"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7883, '02:11:23.126')}
          >
            Yeah.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:11:27.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7887, '02:11:27.054')}
          >
            Each individual has, again, we mentioned the androgen receptor.{' '}
          </a>
          <a
            id="02:11:31.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7891, '02:11:31.054')}
          >
            Males only have one androgen receptor gene.{' '}
          </a>
          <a
            id="02:11:34.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7894, '02:11:34.054')}
          >
            It's on their X chromosome.{' '}
          </a>
          <a
            id="02:11:36.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7896, '02:11:36.054')}
          >
            So depending on how sensitive that androgen receptor is{' '}
          </a>
          <a
            id="02:11:39.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7899, '02:11:39.054')}
          >
            and depending on the density of the receptors in the hair follicle,{' '}
          </a>
          <a
            id="02:11:44.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7904, '02:11:44.054')}
          >
            you can have an arbitrary threshold{' '}
          </a>
          <a
            id="02:11:47.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7907, '02:11:47.054')}
          >
            and you don't know what this threshold is{' '}
          </a>
          <a
            id="02:11:49.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7909, '02:11:49.054')}
          >
            until you start to have miniaturization and loss of hair.{' '}
          </a>
          <a
            id="02:11:52.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7912, '02:11:52.054')}
          >
            But over the threshold, the follicle will die{' '}
          </a>
          <a
            id="02:11:55.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7915, '02:11:55.054')}
          >
            and eventually the stem cell will leave.{' '}
          </a>
          <a
            id="02:11:57.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7917, '02:11:57.054')}
          >
            But under the threshold, you're okay.{' '}
          </a>
          <a
            id="02:12:00.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7920, '02:12:00.054')}
          >
            Every androgen binds to the same androgen receptor.{' '}
          </a>
          <a
            id="02:12:03.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7923, '02:12:03.054')}
          >
            So there is nothing special about DHT.{' '}
          </a>
          <a
            id="02:12:06.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7926, '02:12:06.054')}
          >
            DHT is just a stronger androgen.{' '}
          </a>
          <a
            id="02:12:09.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7929, '02:12:09.054')}
          >
            So the higher your SHBG, things that increase SHBG,{' '}
          </a>
          <a
            id="02:12:13.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7933, '02:12:13.054')}
          >
            are beneficial for hair loss prevention{' '}
          </a>
          <a
            id="02:12:16.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7936, '02:12:16.054')}
          >
            because you have less binding of that receptor.{' '}
          </a>
          <a
            id="02:12:19.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7939, '02:12:19.054')}
          >
            So if you think about hair loss,{' '}
          </a>
          <a
            id="02:12:21.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7941, '02:12:21.054')}
          >
            specifically androgenic or male pattern baldness{' '}
          </a>
          <a
            id="02:12:23.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7943, '02:12:23.054')}
          >
            in the terms of that androgen receptor{' '}
          </a>
          <a
            id="02:12:26.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7946, '02:12:26.054')}
          >
            and everything in general binding to it,{' '}
          </a>
          <a
            id="02:12:28.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7948, '02:12:28.054')}
          >
            not just DHT but also testosterone, it's helpful.{' '}
          </a>
          <a
            id="02:12:31.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7951, '02:12:31.054')}
          >
            It's just that DHT is a huge battering ram{' '}
          </a>
          <a
            id="02:12:34.054"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7954, '02:12:34.054')}
          >
            whereas the other androgens are just light presses on the door.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:12:36.916"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7956, '02:12:36.916')}
          >
            Got it. So are some of the topical DHT receptor antagonists going to be a better choice
            for{' '}
          </a>
          <a
            id="02:12:43.636"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7963, '02:12:43.636')}
          >
            people that want to maintain their hair or grow more hair if they want to avoid side{' '}
          </a>
          <a
            id="02:12:49.236"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7969, '02:12:49.236')}
          >
            effects?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:12:50.079"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7970, '02:12:50.079')}
          >
            Likely so, some individuals benefit from systemic,{' '}
          </a>
          <a
            id="02:12:55.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7975, '02:12:55.759')}
          >
            a systemic decrease in DHT for a couple of reasons.{' '}
          </a>
          <a
            id="02:12:58.839"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7978, '02:12:58.839')}
          >
            One could be prostate,{' '}
          </a>
          <a
            id="02:13:00.119"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7980, '02:13:00.119')}
          >
            and then one could actually be hypertrophy{' '}
          </a>
          <a
            id="02:13:02.839"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7982, '02:13:02.839')}
          >
            of the myocardium.{' '}
          </a>
          <a
            id="02:13:04.159"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7984, '02:13:04.159')}
          >
            So DHT also disproportionately thickens the ventricle.{' '}
          </a>
          <a
            id="02:13:08.119"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7988, '02:13:08.119')}
          >
            So for someone on TRT, that might be a benefit{' '}
          </a>
          <a
            id="02:13:10.319"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7990, '02:13:10.319')}
          >
            that is prone to thickening of the ventricle at baseline.{' '}
          </a>
          <a
            id="02:13:14.099"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7994, '02:13:14.099')}
          >
            However, many people that have just a bit of predisposition,{' '}
          </a>
          <a
            id="02:13:18.399"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(7998, '02:13:18.399')}
          >
            they can use things that are topical anti-androgens.{' '}
          </a>
          <a
            id="02:13:22.759"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8002, '02:13:22.759')}
          >
            Ketoconazole is one of them.{' '}
          </a>
          <a
            id="02:13:24.239"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8004, '02:13:24.239')}
          >
            Caffeine is actually another one.{' '}
          </a>
          <a
            id="02:13:25.999"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8005, '02:13:25.999')}
          >
            Wait, drinking caffeine?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:13:27.507"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8007, '02:13:27.507')}
          >
            topical caffeine.{' '}
          </a>
          <a
            id="02:13:28.347"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8008, '02:13:28.347')}
          >
            Oh, I was going to say, my hair tends to grow pretty fast.{' '}
          </a>
          <a
            id="02:13:30.387"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8010, '02:13:30.387')}
          >
            So it might be that, but I drink a lot of caffeine.{' '}
          </a>
          <a
            id="02:13:32.267"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8012, '02:13:32.267')}
          >
            So topical caffeine, really rubbing coffee on their head{' '}
          </a>
          <a
            id="02:13:35.107"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8015, '02:13:35.107')}
          >
            or taking caffeine tablets.{' '}
          </a>
          <a
            id="02:13:37.627"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8017, '02:13:37.627')}
          >
            And how does it wait?{' '}
          </a>
          <a
            id="02:13:38.907"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8018, '02:13:38.907')}
          >
            You have to explain how this works.{' '}
          </a>
          <a
            id="02:13:40.707"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8020, '02:13:40.707')}
          >
            How do people get caffeine into the hair follicle?{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:13:43.505"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8023, '02:13:43.505')}
          >
            Topically, the caffeine enters the scalp and crowds out,{' '}
          </a>
          <a
            id="02:13:48.625"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8028, '02:13:48.625')}
          >
            like somewhat crowds out the androgen.{' '}
          </a>
          <a
            id="02:13:50.505"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8030, '02:13:50.505')}
          >
            It is a weak effect.{' '}
          </a>
          <a
            id="02:13:52.705"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8032, '02:13:52.705')}
          >
            It's likely just strong enough to be clinically significant.{' '}
          </a>
          <a
            id="02:13:56.105"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8036, '02:13:56.105')}
          >
            Usually caffeine is put into formulations{' '}
          </a>
          <a
            id="02:13:58.465"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8038, '02:13:58.465')}
          >
            with other things like ketoconazole{' '}
          </a>
          <a
            id="02:14:00.765"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8040, '02:14:00.765')}
          >
            that are also weak anti-androgens.{' '}
          </a>
          <a
            id="02:14:03.585"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8043, '02:14:03.585')}
          >
            Of note, spironolactone can be prescribed topically,{' '}
          </a>
          <a
            id="02:14:06.545"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8046, '02:14:06.545')}
          >
            but it is absorbed systemically{' '}
          </a>
          <a
            id="02:14:08.665"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8048, '02:14:08.665')}
          >
            because the size of the molecule.{' '}
          </a>
          <a
            id="02:14:10.545"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8050, '02:14:10.545')}
          >
            So unless your doctor specifically prescribes that for you,{' '}
          </a>
          <a
            id="02:14:13.585"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8053, '02:14:13.585')}
          >
            especially as a male, do not use topical spironolactone.{' '}
          </a>
          <a
            id="02:14:17.305"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8057, '02:14:17.305')}
          >
            Topical finasteride is also a smaller molecule.{' '}
          </a>
          <a
            id="02:14:21.185"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8061, '02:14:21.185')}
          >
            So it is also systemically absorbed,{' '}
          </a>
          <a
            id="02:14:23.525"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8063, '02:14:23.525')}
          >
            but it is not extremely well systemically absorbed.{' '}
          </a>
          <a
            id="02:14:26.765"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8066, '02:14:26.765')}
          >
            If you take topical finasteride,{' '}
          </a>
          <a
            id="02:14:28.905"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8068, '02:14:28.905')}
          >
            then usually your systemic DHT will decrease by about 30%.{' '}
          </a>
          <a
            id="02:14:33.485"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8073, '02:14:33.485')}
          >
            Topical dutasteride is likely a tiny bit{' '}
          </a>
          <a
            id="02:14:36.985"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8076, '02:14:36.985')}
          >
            systemically absorbed, but it's unique{' '}
          </a>
          <a
            id="02:14:38.585"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8078, '02:14:38.585')}
          >
            because it's half-life is much faster at a lower dose.{' '}
          </a>
          <a
            id="02:14:42.005"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8082, '02:14:42.005')}
          >
            So topical dutasteride will not affect{' '}
          </a>
          <a
            id="02:14:44.785"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8084, '02:14:44.785')}
          >
            your systemic DHT at all.{' '}
          </a>
          <a
            id="02:14:46.425"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8086, '02:14:46.425')}
          >
            And I've seen this anecdotally on many people{' '}
          </a>
          <a
            id="02:14:48.585"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8088, '02:14:48.585')}
          >
            on topical dutasteride therapy.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:14:50.448"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8090, '02:14:50.448')}
          >
            We're going to have to get you back on here{' '}
          </a>
          <a
            id="02:14:52.128"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8092, '02:14:52.128')}
          >
            and do an episode all about DHT{' '}
          </a>
          <a
            id="02:14:53.988"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8093, '02:14:53.988')}
          >
            and hair loss and hair growth is, you know,{' '}
          </a>
          <a
            id="02:14:56.128"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8096, '02:14:56.128')}
          >
            again, not a topic that I focus on a lot for myself,{' '}
          </a>
          <a
            id="02:14:59.528"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8099, '02:14:59.528')}
          >
            but that I get a lot of questions about for men and women.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:15:02.497"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8102, '02:15:02.497')}
          >
            One thing that we could mention I got a ton of questions about turmeric and curcuminoids
            after last episode{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:15:09.061"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8109, '02:15:09.061')}
          >
            Oh yeah, but I had reported my own anecdotal experience{' '}
          </a>
          <a
            id="02:15:12.401"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8112, '02:15:12.401')}
          >
            that taking turmeric really crushed my DHT levels{' '}
          </a>
          <a
            id="02:15:15.381"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8115, '02:15:15.381')}
          >
            and I did not feel good.{' '}
          </a>
          <a
            id="02:15:16.721"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8116, '02:15:16.721')}
          >
            I mean, it crushed all sorts of positive feelings{' '}
          </a>
          <a
            id="02:15:20.361"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8120, '02:15:20.361')}
          >
            of vitality.{' '}
          </a>
          <a
            id="02:15:21.201"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8121, '02:15:21.201')}
          >
            The moment I stopped taking turmeric, felt great again.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:15:23.911"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8123, '02:15:23.911')}
          >
            Many people report this and the interesting thing about tumeric{' '}
          </a>
          <a
            id="02:15:28.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8128, '02:15:28.311')}
          >
            is most of its beneficial action, not all of it,{' '}
          </a>
          <a
            id="02:15:31.511"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8131, '02:15:31.511')}
          >
            some people benefit from systemic tumeric{' '}
          </a>
          <a
            id="02:15:34.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8134, '02:15:34.311')}
          >
            and some people that can tolerate it well,{' '}
          </a>
          <a
            id="02:15:36.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8136, '02:15:36.311')}
          >
            it's actually great for the prostate.{' '}
          </a>
          <a
            id="02:15:38.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8138, '02:15:38.311')}
          >
            But most of the action, it does not need to be bioavailable.{' '}
          </a>
          <a
            id="02:15:41.711"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8141, '02:15:41.711')}
          >
            It acts on the gut microbiome.{' '}
          </a>
          <a
            id="02:15:43.711"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8143, '02:15:43.711')}
          >
            So you can take tumeric and if it is not absorbed,{' '}
          </a>
          <a
            id="02:15:48.111"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8148, '02:15:48.111')}
          >
            some tumerics is put in special formulations like micellar,{' '}
          </a>
          <a
            id="02:15:51.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8151, '02:15:51.311')}
          >
            liposomal or complexed, but a lot of it{' '}
          </a>
          <a
            id="02:15:54.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8154, '02:15:54.311')}
          >
            is put with black pepper fruit extract,{' '}
          </a>
          <a
            id="02:15:56.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8156, '02:15:56.311')}
          >
            which is also known as bio-purine,{' '}
          </a>
          <a
            id="02:15:58.011"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8158, '02:15:58.011')}
          >
            which is actually also a 5-alpha reductase inhibitor{' '}
          </a>
          <a
            id="02:16:01.231"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8161, '02:16:01.231')}
          >
            and it affects liver cytochromes.{' '}
          </a>
          <a
            id="02:16:03.591"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8163, '02:16:03.591')}
          >
            And so many supplement companies{' '}
          </a>
          <a
            id="02:16:04.991"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8164, '02:16:04.991')}
          >
            put this black pepper fruit extract,{' '}
          </a>
          <a
            id="02:16:06.991"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8166, '02:16:06.991')}
          >
            bio-purine in almost everything.{' '}
          </a>
          <a
            id="02:16:09.311"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8169, '02:16:09.311')}
          >
            So some people are on really high doses{' '}
          </a>
          <a
            id="02:16:11.551"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8171, '02:16:11.551')}
          >
            and that could also be making most of the effect of people{' '}
          </a>
          <a
            id="02:16:15.751"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8175, '02:16:15.751')}
          >
            who do not tolerate tumeric well.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:16:17.388"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8177, '02:16:17.388')}
          >
            Yeah, I avoid turmeric like the plague{' '}
          </a>
          <a
            id="02:16:19.928"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8179, '02:16:19.928')}
          >
            based on that one previous experience{' '}
          </a>
          <a
            id="02:16:21.648"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8181, '02:16:21.648')}
          >
            because it was clearly turmeric{' '}
          </a>
          <a
            id="02:16:24.488"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8184, '02:16:24.488')}
          >
            that caused the negative effect coming off it,{' '}
          </a>
          <a
            id="02:16:27.288"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8187, '02:16:27.288')}
          >
            everything reversed rapidly.{' '}
          </a>
          <a
            id="02:16:29.148"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8189, '02:16:29.148')}
          >
            And the bio-purine, the black pepper extract,{' '}
          </a>
          <a
            id="02:16:31.768"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8191, '02:16:31.768')}
          >
            I also avoid that like the plague{' '}
          </a>
          <a
            id="02:16:33.168"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8193, '02:16:33.168')}
          >
            based on everything you just said.{' '}
          </a>
          <a
            id="02:16:35.048"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8195, '02:16:35.048')}
          >
            I want my five alpha reductase,{' '}
          </a>
          <a
            id="02:16:37.168"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8197, '02:16:37.168')}
          >
            I want my DHT to be optimized{' '}
          </a>
          <a
            id="02:16:40.528"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8200, '02:16:40.528')}
          >
            simply because my understanding is DHT{' '}
          </a>
          <a
            id="02:16:42.688"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8202, '02:16:42.688')}
          >
            is the more powerful androgen{' '}
          </a>
          <a
            id="02:16:45.848"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8205, '02:16:45.848')}
          >
            and it's the one that, yes, it causes{' '}
          </a>
          <a
            id="02:16:47.528"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8207, '02:16:47.528')}
          >
            a little bit of hair loss,{' '}
          </a>
          <a
            id="02:16:48.368"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8208, '02:16:48.368')}
          >
            and I've got a few patches here and there,{' '}
          </a>
          <a
            id="02:16:50.208"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8210, '02:16:50.208')}
          >
            but I'm willing to live with that{' '}
          </a>
          <a
            id="02:16:52.088"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8212, '02:16:52.088')}
          >
            based on all the other wonderful things{' '}
          </a>
          <a
            id="02:16:53.448"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8213, '02:16:53.448')}
          >
            that DHT optimization does.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:16:55.947"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8215, '02:16:55.947')}
          >
            I'll quickly mention a few other things.{' '}
          </a>
          <a
            id="02:16:58.307"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8218, '02:16:58.307')}
          >
            One, salpalmetto is also a 5-alpha-dexase inhibitor,{' '}
          </a>
          <a
            id="02:17:02.187"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8222, '02:17:02.187')}
          >
            but only a couple of the isoenzymes.{' '}
          </a>
          <a
            id="02:17:04.707"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8224, '02:17:04.707')}
          >
            There's three main isoenzymes,{' '}
          </a>
          <a
            id="02:17:06.887"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8226, '02:17:06.887')}
          >
            and a lot of the problem is that you're inhibiting{' '}
          </a>
          <a
            id="02:17:09.467"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8229, '02:17:09.467')}
          >
            a couple of the isoenzymes, but not the other one.{' '}
          </a>
          <a
            id="02:17:12.907"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8232, '02:17:12.907')}
          >
            Finasteride inhibits one and two.{' '}
          </a>
          <a
            id="02:17:16.627"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8236, '02:17:16.627')}
          >
            Dutasteride actually inhibits all three.{' '}
          </a>
          <a
            id="02:17:19.227"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8239, '02:17:19.227')}
          >
            And finasteride inhibits the isoenzyme{' '}
          </a>
          <a
            id="02:17:22.787"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8242, '02:17:22.787')}
          >
            that is in genital skin,{' '}
          </a>
          <a
            id="02:17:24.427"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8244, '02:17:24.427')}
          >
            but not in the skin throughout the rest of your body.{' '}
          </a>
          <a
            id="02:17:27.427"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8247, '02:17:27.427')}
          >
            So a lot of the side effects of finasteride,{' '}
          </a>
          <a
            id="02:17:29.707"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8249, '02:17:29.707')}
          >
            which is loss of sensation and loss of erectile function,{' '}
          </a>
          <a
            id="02:17:33.667"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8253, '02:17:33.667')}
          >
            have to do with the disconcordance{' '}
          </a>
          <a
            id="02:17:37.507"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8257, '02:17:37.507')}
          >
            between the sensitivity of the genital skin and the skin.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:17:40.496"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8260, '02:17:40.496')}
          >
            And again, another reason to not disrupt 5-alpha reductase.{' '}
          </a>
          <a
            id="02:17:44.536"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8264, '02:17:44.536')}
          >
            And we'll definitely get you back on here to talk about D,{' '}
          </a>
          <a
            id="02:17:46.936"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8266, '02:17:46.936')}
          >
            I think we should just do a whole episode about DHT,{' '}
          </a>
          <a
            id="02:17:49.016"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8269, '02:17:49.016')}
          >
            because so often when people are thinking{' '}
          </a>
          <a
            id="02:17:50.536"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8270, '02:17:50.536')}
          >
            about optimizing hormones,{' '}
          </a>
          <a
            id="02:17:51.976"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8271, '02:17:51.976')}
          >
            especially males trying to optimize their hormones,{' '}
          </a>
          <a
            id="02:17:55.376"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8275, '02:17:55.376')}
          >
            they're thinking testosterone, testosterone.{' '}
          </a>
          <a
            id="02:17:56.936"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8276, '02:17:56.936')}
          >
            Maybe nowadays they think a little bit more{' '}
          </a>
          <a
            id="02:17:58.336"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8278, '02:17:58.336')}
          >
            about free testosterone,{' '}
          </a>
          <a
            id="02:17:59.496"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8279, '02:17:59.496')}
          >
            and maybe they think about estrogen{' '}
          </a>
          <a
            id="02:18:00.976"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8280, '02:18:00.976')}
          >
            as also being important not to crush estrogen,{' '}
          </a>
          <a
            id="02:18:02.896"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8282, '02:18:02.896')}
          >
            but DHT is, you know, at least to my mind,{' '}
          </a>
          <a
            id="02:18:06.116"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8286, '02:18:06.116')}
          >
            the linchpin of so many of the things{' '}
          </a>
          <a
            id="02:18:07.656"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8287, '02:18:07.656')}
          >
            that subjectively people are really focused on, libido,{' '}
          </a>
          <a
            id="02:18:10.616"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8290, '02:18:10.616')}
          >
            motivation, drive, et cetera.{' '}
          </a>
          <a
            id="02:18:13.136"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8293, '02:18:13.136')}
          >
            I have one final question, it's just a brief one,{' '}
          </a>
          <a
            id="02:18:14.936"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8294, '02:18:14.936')}
          >
            but many of us have heard that the BPAs{' '}
          </a>
          <a
            id="02:18:17.456"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8297, '02:18:17.456')}
          >
            that are present in, you know, plastic bottles{' '}
          </a>
          <a
            id="02:18:19.496"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8299, '02:18:19.496')}
          >
            and even in certain aluminum cans,{' '}
          </a>
          <a
            id="02:18:21.456"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8301, '02:18:21.456')}
          >
            and phthalates, a difficult word to pronounce,{' '}
          </a>
          <a
            id="02:18:24.256"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8304, '02:18:24.256')}
          >
            but a fun one nonetheless,{' '}
          </a>
          <a
            id="02:18:25.496"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8305, '02:18:25.496')}
          >
            phthalates and work by Dr. Shana Swan{' '}
          </a>
          <a
            id="02:18:28.696"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8308, '02:18:28.696')}
          >
            has shown that phthalate exposure to the fetus,{' '}
          </a>
          <a
            id="02:18:32.136"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8312, '02:18:32.136')}
          >
            to pregnant mothers and the fetuses,{' '}
          </a>
          <a
            id="02:18:34.016"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8314, '02:18:34.016')}
          >
            very likely is negatively impacting sperm counts,{' '}
          </a>
          <a
            id="02:18:36.656"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8316, '02:18:36.656')}
          >
            testosterone levels, and even changing genitalia size{' '}
          </a>
          <a
            id="02:18:39.896"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8319, '02:18:39.896')}
          >
            for the worse in males nowadays.{' '}
          </a>
          <a
            id="02:18:44.336"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8324, '02:18:44.336')}
          >
            I saw a beautiful lecture that Dr. Shana Swan did{' '}
          </a>
          <a
            id="02:18:47.076"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8327, '02:18:47.076')}
          >
            on this when I was in Copenhagen,{' '}
          </a>
          <a
            id="02:18:48.576"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8328, '02:18:48.576')}
          >
            and it's very clear that it's negatively impacting{' '}
          </a>
          <a
            id="02:18:50.776"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8330, '02:18:50.776')}
          >
            the male fetus.{' '}
          </a>
          <a
            id="02:18:51.616"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8331, '02:18:51.616')}
          >
            She was also on Joe Rogan's podcast.{' '}
          </a>
          <a
            id="02:18:53.016"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8333, '02:18:53.016')}
          >
            I hope to get her on this podcast.{' '}
          </a>
          <a
            id="02:18:54.936"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8334, '02:18:54.936')}
          >
            However, what she couldn't answer for me{' '}
          </a>
          <a
            id="02:18:57.696"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8337, '02:18:57.696')}
          >
            was whether or not phthalates and BPAs{' '}
          </a>
          <a
            id="02:18:59.856"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8339, '02:18:59.856')}
          >
            and these things present in plastics,{' '}
          </a>
          <a
            id="02:19:01.276"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8341, '02:19:01.276')}
          >
            and some people would claim in tap water,{' '}
          </a>
          <a
            id="02:19:03.576"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8343, '02:19:03.576')}
          >
            are bad for males after they're born and after puberty.{' '}
          </a>
          <a
            id="02:19:08.456"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8348, '02:19:08.456')}
          >
            What are your thoughts on,{' '}
          </a>
          <a
            id="02:19:10.176"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8350, '02:19:10.176')}
          >
            or I should just ask you,{' '}
          </a>
          <a
            id="02:19:11.016"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8351, '02:19:11.016')}
          >
            do you drink water out of plastic bottles?{' '}
          </a>
          <a
            id="02:19:13.096"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8353, '02:19:13.096')}
          >
            Do you avoid drinking out of cans{' '}
          </a>
          <a
            id="02:19:15.676"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8355, '02:19:15.676')}
          >
            that are not specifically non-BPA containing cans?{' '}
          </a>
          <a
            id="02:19:20.116"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8360, '02:19:20.116')}
          >
            And do you actively avoid phthalates?{' '}
          </a>
          <a
            id="02:19:21.975"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8361, '02:19:21.975')}
          >
            My understanding is that phthalates{' '}
          </a>
          <a
            id="02:19:23.096"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8363, '02:19:23.096')}
          >
            are most enriched in pesticides,{' '}
          </a>
          <a
            id="02:19:24.896"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8364, '02:19:24.896')}
          >
            and that's why you're seeing dramatic drops in sperm{' '}
          </a>
          <a
            id="02:19:27.936"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8367, '02:19:27.936')}
          >
            and testosterone levels, mainly in rural areas{' '}
          </a>
          <a
            id="02:19:30.376"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8370, '02:19:30.376')}
          >
            where they're dust cropping.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:19:31.501"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8371, '02:19:31.501')}
          >
            Yeah, so I do avoid drinking out of cans that are plastics{' '}
          </a>
          <a
            id="02:19:35.981"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8375, '02:19:35.981')}
          >
            that may have BPA or bisphenol A in them.{' '}
          </a>
          <a
            id="02:19:40.401"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8380, '02:19:40.401')}
          >
            Bisphenol A is known to bind to{' '}
          </a>
          <a
            id="02:19:43.561"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8383, '02:19:43.561')}
          >
            what I would consider the fifth estrogen receptor,{' '}
          </a>
          <a
            id="02:19:45.921"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8385, '02:19:45.921')}
          >
            estrogen-related receptor gamma.{' '}
          </a>
          <a
            id="02:19:49.381"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8389, '02:19:49.381')}
          >
            So I would consider it a xenoestrogen.{' '}
          </a>
          <a
            id="02:19:52.881"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8392, '02:19:52.881')}
          >
            So phytoestrogens are estrogens from plants{' '}
          </a>
          <a
            id="02:19:55.201"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8395, '02:19:55.201')}
          >
            and in general, they're not concerning{' '}
          </a>
          <a
            id="02:19:56.521"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8396, '02:19:56.521')}
          >
            or clinically significant{' '}
          </a>
          <a
            id="02:19:57.641"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8397, '02:19:57.641')}
          >
            and xenoestrogens are just other estrogens.{' '}
          </a>
          <a
            id="02:20:01.041"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8401, '02:20:01.041')}
          >
            So I do avoid BPA and I also test my water.{' '}
          </a>
          <a
            id="02:20:05.721"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8405, '02:20:05.721')}
          >
            I use a water testing service and I test it both{' '}
          </a>
          <a
            id="02:20:08.641"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8408, '02:20:08.641')}
          >
            after it's through my water filter{' '}
          </a>
          <a
            id="02:20:11.361"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8411, '02:20:11.361')}
          >
            and the tap water that my two boys drink almost every day.{' '}
          </a>
          <a
            id="02:20:16.081"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8416, '02:20:16.081')}
          >
            And it was very interesting.{' '}
          </a>
          <a
            id="02:20:17.081"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8417, '02:20:17.081')}
          >
            I only found one microplastic{' '}
          </a>
          <a
            id="02:20:19.041"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8419, '02:20:19.041')}
          >
            just a bit over the reference range.{' '}
          </a>
          <a
            id="02:20:21.721"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8421, '02:20:21.721')}
          >
            So it wasn't a terrible tap score,{' '}
          </a>
          <a
            id="02:20:23.461"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8423, '02:20:23.461')}
          >
            but even in developed countries, these are widely variable.{' '}
          </a>
          <a
            id="02:20:27.281"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8427, '02:20:27.281')}
          >
            As far as pethylates, again, very difficult{' '}
          </a>
          <a
            id="02:20:31.601"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8431, '02:20:31.601')}
          >
            and interesting to pronounce,{' '}
          </a>
          <a
            id="02:20:33.641"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8433, '02:20:33.641')}
          >
            but I remember learning about these{' '}
          </a>
          <a
            id="02:20:35.520"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8435, '02:20:35.520')}
          >
            because there was, I believe, a lawsuit{' '}
          </a>
          <a
            id="02:20:38.041"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8438, '02:20:38.041')}
          >
            that had to do with mac and cheese.{' '}
          </a>
          <a
            id="02:20:40.481"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8440, '02:20:40.481')}
          >
            And this was probably five years ago{' '}
          </a>
          <a
            id="02:20:44.001"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8444, '02:20:44.001')}
          >
            and I was coming up with my list of,{' '}
          </a>
          <a
            id="02:20:47.201"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8447, '02:20:47.201')}
          >
            each provider that does obstetrics has a list{' '}
          </a>
          <a
            id="02:20:49.641"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8449, '02:20:49.641')}
          >
            what to avoid for the pregnant lady,{' '}
          </a>
          <a
            id="02:20:51.961"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8451, '02:20:51.961')}
          >
            sketchy deli meats or high mercury fish{' '}
          </a>
          <a
            id="02:20:55.361"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8455, '02:20:55.361')}
          >
            like swordfish and salmon.{' '}
          </a>
          <a
            id="02:20:56.481"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8456, '02:20:56.481')}
          >
            And I actually added processed mac and cheese to that list.{' '}
          </a>
          <a
            id="02:21:00.161"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8460, '02:21:00.161')}
          >
            And it was very interesting.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:21:00.550"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8460, '02:21:00.550')}
          >
            Well, thank you for that.{' '}
          </a>
          <a
            id="02:21:01.870"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8461, '02:21:01.870')}
          >
            I'm going to extract your statement{' '}
          </a>
          <a
            id="02:21:03.890"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8463, '02:21:03.890')}
          >
            that you avoid drinking out of plastic bottles{' '}
          </a>
          <a
            id="02:21:06.270"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8466, '02:21:06.270')}
          >
            when possible.{' '}
          </a>
          <a
            id="02:21:07.450"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8467, '02:21:07.450')}
          >
            I'm guessing you're not neurotically attached to that.{' '}
          </a>
          <a
            id="02:21:09.190"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8469, '02:21:09.190')}
          >
            If you were dying of thirst,{' '}
          </a>
          <a
            id="02:21:10.190"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8470, '02:21:10.190')}
          >
            you might crack a plastic bottle of water to survive.{' '}
          </a>
          <a
            id="02:21:12.790"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8472, '02:21:12.790')}
          >
            But listen, Kyle, Dr. Gillette, thank you so much.{' '}
          </a>
          <a
            id="02:21:18.690"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8478, '02:21:18.690')}
          >
            You gave us an enormous wealth of knowledge,{' '}
          </a>
          <a
            id="02:21:21.030"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8481, '02:21:21.030')}
          >
            everything from behaviors to psychology,{' '}
          </a>
          <a
            id="02:21:24.750"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8484, '02:21:24.750')}
          >
            to supplementation, to prescription drugs.{' '}
          </a>
          <a
            id="02:21:27.870"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8487, '02:21:27.870')}
          >
            We will make sure to point out{' '}
          </a>
          <a
            id="02:21:29.530"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8489, '02:21:29.530')}
          >
            where people can get ahold of you on Instagram{' '}
          </a>
          <a
            id="02:21:31.510"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8491, '02:21:31.510')}
          >
            and on Twitter and on other websites{' '}
          </a>
          <a
            id="02:21:35.430"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8495, '02:21:35.430')}
          >
            in our show note captions.{' '}
          </a>
          <a
            id="02:21:36.690"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8496, '02:21:36.690')}
          >
            But really just on behalf of the audience{' '}
          </a>
          <a
            id="02:21:39.150"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8499, '02:21:39.150')}
          >
            and just for myself, thank you so much.{' '}
          </a>
          <a
            id="02:21:41.470"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8501, '02:21:41.470')}
          >
            You have an immense amount of knowledge{' '}
          </a>
          <a
            id="02:21:42.930"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8502, '02:21:42.930')}
          >
            and you're exquisitely good at sharing it{' '}
          </a>
          <a
            id="02:21:45.110"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8505, '02:21:45.110')}
          >
            with people in an actionable way.{' '}
          </a>
          <a
            id="02:21:46.630"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8506, '02:21:46.630')}
          >
            So thank you.{' '}
          </a>
          <a
            id="02:21:47.790"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8507, '02:21:47.790')}
          >
            My pleasure.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:21:41.439"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8501, '02:21:41.439')}
          >
            Yup.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Gillett</h3>
          <a
            id="02:21:47.800"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8507, '02:21:47.800')}
          >
            My pleasure.{' '}
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Huberman</h3>
          <a
            id="02:21:49.083"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8509, '02:21:49.083')}
          >
            Thank you for joining me today for my discussion{' '}
          </a>
          <a
            id="02:21:50.943"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8510, '02:21:50.943')}
          >
            with Dr. Kyle Gillette,{' '}
          </a>
          <a
            id="02:21:52.003"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8512, '02:21:52.003')}
          >
            all about male hormone optimization.{' '}
          </a>
          <a
            id="02:21:54.643"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8514, '02:21:54.643')}
          >
            And I just want to remind everybody{' '}
          </a>
          <a
            id="02:21:56.123"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8516, '02:21:56.123')}
          >
            that we will soon have an episode{' '}
          </a>
          <a
            id="02:21:57.503"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8517, '02:21:57.503')}
          >
            all about female hormone optimization.{' '}
          </a>
          <a
            id="02:22:00.123"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8520, '02:22:00.123')}
          >
            If you're learning from and are enjoying this podcast,{' '}
          </a>
          <a
            id="02:22:02.123"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8522, '02:22:02.123')}
          >
            please subscribe to our YouTube channel.{' '}
          </a>
          <a
            id="02:22:03.683"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8523, '02:22:03.683')}
          >
            That's a terrific zero cost way to support us.{' '}
          </a>
          <a
            id="02:22:06.363"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8526, '02:22:06.363')}
          >
            In addition, please subscribe to the podcast{' '}
          </a>
          <a
            id="02:22:08.403"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8528, '02:22:08.403')}
          >
            on both Spotify and Apple.{' '}
          </a>
          <a
            id="02:22:09.903"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8529, '02:22:09.903')}
          >
            And on both Spotify and Apple,{' '}
          </a>
          <a
            id="02:22:11.383"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8531, '02:22:11.383')}
          >
            you can leave us up to a five-star review.{' '}
          </a>
          <a
            id="02:22:13.723"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8533, '02:22:13.723')}
          >
            If you have questions for us or comments about the podcast{' '}
          </a>
          <a
            id="02:22:16.683"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8536, '02:22:16.683')}
          >
            or guests that you'd like me to interview{' '}
          </a>
          <a
            id="02:22:18.123"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8538, '02:22:18.123')}
          >
            on the Huberman Lab podcast,{' '}
          </a>
          <a
            id="02:22:19.323"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8539, '02:22:19.323')}
          >
            please put those in the comment section on YouTube.{' '}
          </a>
          <a
            id="02:22:21.363"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8541, '02:22:21.363')}
          >
            We do read all the comments.{' '}
          </a>
          <a
            id="02:22:23.603"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8543, '02:22:23.603')}
          >
            In addition, please check out the sponsors{' '}
          </a>
          <a
            id="02:22:25.403"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8545, '02:22:25.403')}
          >
            mentioned at the beginning and throughout today's episode.{' '}
          </a>
          <a
            id="02:22:27.903"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8547, '02:22:27.903')}
          >
            That's the best way to support this podcast.{' '}
          </a>
          <a
            id="02:22:30.183"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8550, '02:22:30.183')}
          >
            If you're not already following Huberman Lab{' '}
          </a>
          <a
            id="02:22:31.923"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8551, '02:22:31.923')}
          >
            on social media, we are Huberman Lab on all platforms.{' '}
          </a>
          <a
            id="02:22:34.683"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8554, '02:22:34.683')}
          >
            So that's Instagram, Twitter, LinkedIn, and Facebook.{' '}
          </a>
          <a
            id="02:22:38.283"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8558, '02:22:38.283')}
          >
            And all of those places,{' '}
          </a>
          <a
            id="02:22:39.563"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8559, '02:22:39.563')}
          >
            I describe science and science-related tools,{' '}
          </a>
          <a
            id="02:22:41.323"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8561, '02:22:41.323')}
          >
            some of which overlap with the contents{' '}
          </a>
          <a
            id="02:22:42.703"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8562, '02:22:42.703')}
          >
            of the Huberman Lab podcast,{' '}
          </a>
          <a
            id="02:22:44.043"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8564, '02:22:44.043')}
          >
            but much of which is distinct from content{' '}
          </a>
          <a
            id="02:22:46.603"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8566, '02:22:46.603')}
          >
            on the Huberman Lab podcast.{' '}
          </a>
          <a
            id="02:22:47.643"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8567, '02:22:47.643')}
          >
            So again, it's Huberman Lab on all social media platforms.{' '}
          </a>
          <a
            id="02:22:50.563"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8570, '02:22:50.563')}
          >
            During today's episode and on many previous episodes{' '}
          </a>
          <a
            id="02:22:52.843"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8572, '02:22:52.843')}
          >
            of the Huberman Lab podcast, we discuss supplements.{' '}
          </a>
          <a
            id="02:22:55.643"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8575, '02:22:55.643')}
          >
            While supplements aren't necessary for everybody,{' '}
          </a>
          <a
            id="02:22:57.763"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8577, '02:22:57.763')}
          >
            many people derive tremendous benefit from them{' '}
          </a>
          <a
            id="02:22:59.803"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8579, '02:22:59.803')}
          >
            for things like sleep, hormone augmentation, and focus.{' '}
          </a>
          <a
            id="02:23:02.883"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8582, '02:23:02.883')}
          >
            If you'd like to see the supplements{' '}
          </a>
          <a
            id="02:23:04.163"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8584, '02:23:04.163')}
          >
            discussed on various episodes of the Huberman Lab podcast,{' '}
          </a>
          <a
            id="02:23:07.283"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8587, '02:23:07.283')}
          >
            please go to livemomentous.com slash Huberman.{' '}
          </a>
          <a
            id="02:23:10.643"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8590, '02:23:10.643')}
          >
            We partnered with Momentous{' '}
          </a>
          <a
            id="02:23:12.023"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8592, '02:23:12.023')}
          >
            because they are extremely high quality,{' '}
          </a>
          <a
            id="02:23:14.483"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8594, '02:23:14.483')}
          >
            they ship internationally,{' '}
          </a>
          <a
            id="02:23:16.163"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8596, '02:23:16.163')}
          >
            and they formulated supplements in the precise ways{' '}
          </a>
          <a
            id="02:23:19.203"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8599, '02:23:19.203')}
          >
            that are discussed as optimal to take for various outcomes{' '}
          </a>
          <a
            id="02:23:22.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8602, '02:23:22.842')}
          >
            here on the Huberman Lab podcast.{' '}
          </a>
          <a
            id="02:23:24.622"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8604, '02:23:24.622')}
          >
            If you haven't already subscribed{' '}
          </a>
          <a
            id="02:23:25.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8605, '02:23:25.842')}
          >
            to the Huberman Lab podcast newsletter,{' '}
          </a>
          <a
            id="02:23:28.003"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8608, '02:23:28.003')}
          >
            it is a monthly newsletter{' '}
          </a>
          <a
            id="02:23:29.363"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8609, '02:23:29.363')}
          >
            that includes summaries of podcast episodes,{' '}
          </a>
          <a
            id="02:23:31.923"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8611, '02:23:31.923')}
          >
            as well as toolkits,{' '}
          </a>
          <a
            id="02:23:33.603"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8613, '02:23:33.603')}
          >
            all of which are completely zero cost.{' '}
          </a>
          <a
            id="02:23:35.562"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8615, '02:23:35.562')}
          >
            All you have to do is provide your email to sign up.{' '}
          </a>
          <a
            id="02:23:38.323"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8618, '02:23:38.323')}
          >
            We do not share your email with anybody.{' '}
          </a>
          <a
            id="02:23:40.122"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8620, '02:23:40.122')}
          >
            You do this by going to HubermanLab.com,{' '}
          </a>
          <a
            id="02:23:41.842"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8621, '02:23:41.842')}
          >
            go to the menu and tap down to newsletter,{' '}
          </a>
          <a
            id="02:23:44.963"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8624, '02:23:44.963')}
          >
            provide your email, you'll get a confirmation link,{' '}
          </a>
          <a
            id="02:23:47.703"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8627, '02:23:47.703')}
          >
            click on that link{' '}
          </a>
          <a
            id="02:23:48.543"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8628, '02:23:48.543')}
          >
            and you'll receive our monthly newsletters.{' '}
          </a>
          <a
            id="02:23:49.923"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8629, '02:23:49.923')}
          >
            And you can also access any of the previous newsletters{' '}
          </a>
          <a
            id="02:23:52.823"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8632, '02:23:52.823')}
          >
            that we've released,{' '}
          </a>
          <a
            id="02:23:53.663"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8633, '02:23:53.663')}
          >
            including the toolkit for sleep, for fitness,{' '}
          </a>
          <a
            id="02:23:55.443"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8635, '02:23:55.443')}
          >
            deliberate cold exposure, and so on,{' '}
          </a>
          <a
            id="02:23:57.523"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8637, '02:23:57.523')}
          >
            by going to HubermanLab.com,{' '}
          </a>
          <a
            id="02:23:58.763"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8638, '02:23:58.763')}
          >
            going to the menu, going to newsletter,{' '}
          </a>
          <a
            id="02:24:00.883"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8640, '02:24:00.883')}
          >
            and there you'll see those as immediately downloadable PDFs.{' '}
          </a>
          <a
            id="02:24:03.923"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8643, '02:24:03.923')}
          >
            Thank you once again for joining me{' '}
          </a>
          <a
            id="02:24:05.283"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8645, '02:24:05.283')}
          >
            for today's discussion about male hormone optimization{' '}
          </a>
          <a
            id="02:24:08.243"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8648, '02:24:08.243')}
          >
            with Dr. Kyle Gillette.{' '}
          </a>
          <a
            id="02:24:09.683"
            style={{ color: 'black', textDecoration: 'none' }}
            onClick={() => jumptoTime(8649, '02:24:09.683')}
          >
            And as always, thank you for your interest in science.{' '}
          </a>
        </div>
      </div>
    </>
  )
}
