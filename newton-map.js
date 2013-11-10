{"version":3,"file":"newton.js","sources":["src/body.js","src/distanceconstraint.js","src/edge.js","src/frame.js","src/layer.js","src/lineargravity.js","src/material.js","src/particle.js","src/pixirenderer.js","src/radialgravity.js","src/rectangle.js","src/renderer.js","src/simulator.js","src/vector.js"],"names":["Newton","Body","material","this","particles","edges","constraints","simulator","undefined","simParticles","simEdges","simConstraints","prototype","addTo","Error","push","apply","addParticle","particle","Particle","Array","slice","call","arguments","addEdge","edge","Edge","addConstraint","constraint","DistanceConstraint","each","method","args","i","length","callback","exports","p1","p2","distance","getDistance","pos1","position","pos2","diff","clone","sub","getLength","resolve","factor","correction","scale","correct","getCoords","x1","x","y1","y","x2","y2","Material","simple","compute","_rect","Rectangle","COLLISION_TOLERANCE","getAbc","a","b","c","anchor","vector","angle","getAngle","normal","turnLeft","unit","bounds","fromVectors","expand","getRepelled","Vector","add","getProjection","dot","getDot","getAngleDelta","findIntersection","bounds1","bounds2","set","overlaps","l1","l2","det","contains","scratch","getReflection","velocity","restitution","dir","friction","velN","multScalar","velT","reflectedVel","timeoutFrame","currTime","Date","getTime","timeToCall","Math","max","lastTime","id","setTimeout","cancelTimeoutFrame","clearTimeout","window","vendors","isOpera","opera","navigator","userAgent","indexOf","Object","toString","HTMLElement","chrome","requestAnimationFrame","cancelAnimationFrame","frame","bind","cancelFrame","Layer","bodies","forces","watchedLayers","wrapper","container","cachedParticles","cachedForces","cachedEdges","respondTo","layers","addForce","force","wrapIn","rect","containBy","addBody","body","collect","ilen","j","jlen","watched","integrate","time","applyTo","constrain","wrap","contain","collide","LinearGravity","strength","falloff","rotate","setAngle","setStrength","accelerateVector","options","weight","maxVelocity","maxVelocitySquared","setMaxVelocity","v","mod","size","lastPosition","lastValidPosition","acceleration","randomDrag","random","randomness","pinned","colliding","copy","drag","min","getSquaredLength","zero","placeAt","moveBy","dx","dy","pin","setVelocity","subXY","right","left","bottom","top","newX","width","newY","height","applyForce","mass","getMass","getSquaredSpeed","attractSquare","m","minDist","delta","r","f","ratio","nearest","intersect","oldDistance","newDistance","partOfEdge","wall","bouncePoint","reflectedVelocity","rgbToHex","g","PixiRenderer","el","stage","PIXI","Stage","setInteractive","renderer","autoDetectRenderer","view","style","display","appendChild","infoText","Text","fill","font","addChild","graphics","Graphics","sim","clear","drawParticles","drawEdges","drawForces","setText","fps","render","lineStyle","RadialGravity","beginFill","drawCircle","endFill","pos","last","brightness","moveTo","lineTo","setLocation","v1","v2","amount","Renderer","ctx","getContext","drawConstraints","drawCounts","drawFPS","save","fillStyle","fillRect","restore","lineWidth","strokeStyle","beginPath","arc","PI","lineCap","join","stroke","closePath","counts","fillText","text","noop","Simulator","preSimulator","integrationFps","iterations","step","_step","running","frames","countTime","countInterval","accumulator","simulationStep","start","now","stop","simulate","entity","newLayer","toFixed","mult","multVector","reverse","div","scalar","turnRight","sin","cos","getCross","sqrt","atan2"],"mappings":"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"}